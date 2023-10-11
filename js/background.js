const images = ["도원경.jpg", "너의이름은.jpg", "th.jpg"];

const todayImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${todayImage}`;

// 이미지 스타일을 적용
bgImage.style.width = "50%"; // 이미지 너비를 50%로 설정
bgImage.style.height = "auto"; // 높이를 자동으로 조절하여 비율 유지

document.body.appendChild(bgImage);
