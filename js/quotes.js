const quotes = [
  {
    quote: "진짜 문제는 사람들의 마음이다. 그것은 절대로 물리학이나 윤리학의 문제가 아니다.",
    author: "- 아인슈타인 -",
  },
  {
    quote: "좋은 성과를 얻으려면 한 걸음 한 걸음이 힘차고 충실하지 않으면 안 된다.",
    author: "- 단테 -",
  },
  {
    quote: "한번의 실패와 영원한 실패를 혼동하지 마라.",
    author: "- F.스콧 핏제랄드 -",
  },
  {
    quote: "꿈을 계속 간직하고 있으면 반드시 실현할 때가 온다.",
    author: "- 괴테 -",
  },
  {
    quote: "만약 우리가 할 수 있는 일을 모두 한다면 우리들은 우리자신에 깜짝 놀랄 것이다.",
    author: "- 에디슨 -",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = "오늘의 명언: " + todayQuote.quote;
author.innerText = "오늘의 작가: " + todayQuote.author;

