const todoForm = document.getElementById("frmTodo");
const todoInput = document.querySelector("#frmTodo input");
const todoList = document.getElementById("lstTodo");

const TODOS_KEY = "todos";

let todos = [];

// 로컬 스토리지에서 할 일 목록 불러오기
const savedTodos = localStorage.getItem(TODOS_KEY);

if (savedTodos !== null) {
  todos = JSON.parse(savedTodos);
  todos.forEach(displayTodo); // 저장된 할 일 목록을 화면에 표시
}

// 할 일 목록을 로컬 스토리지에 저장하는 함수
function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

// 할 일 목록에서 항목을 삭제하는 함수
function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
  const cleanTodos = todos.filter((todo) => {
    return todo.id !== parseInt(li.id);
  });
  todos = cleanTodos;
  saveToDos();
}

// 할 일 목록을 화면에 표시하는 함수
function displayTodo(todo) {
  const li = document.createElement("li");
  li.id = todo.id;

  const span = document.createElement("span");
  span.innerText = todo.text;

  const button = document.createElement("button");
  button.innerText = "X";
  button.addEventListener("click", deleteTodo);

  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);
}

// 할 일을 입력하고 목록에 추가
function addTodo(text) {
  const newTodo = {
    id: Date.now(),
    text: text,
  };

  todos.push(newTodo);
  displayTodo(newTodo);
  saveToDos();
}

// 할 일 입력 양식 제출 시 호출
function handleSubmitTodo() {
  event.preventDefault();
  const valueTodo = todoInput.value;

  if (valueTodo === "") {
    return;
  }

  addTodo(valueTodo);

  todoInput.value = ""; // 입력 필드 비우기
}

// 할 일 입력 양식 제출 이벤트 리스너 등록
todoForm.addEventListener("submit", handleSubmitTodo);