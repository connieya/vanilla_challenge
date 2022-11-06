const images = [];
for (let i = 0; i <= 6; i++) {
  let str = i + ".jpg";
  images.push(str);
}

const chosenImage = images[Math.floor(Math.random() * images.length)];
document.body.style.backgroundImage = `url(./img/${chosenImage})`;
document.body.style.backgroundSize = "100% 100%";

const clock = document.querySelector("#clock");
setInterval(() => {
  const date = new Date();

  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const hour = String(date.getHours()).padStart(2, "0");
  const minute = String(date.getMinutes()).padStart(2, "0");
  const second = String(date.getSeconds()).padStart(2, "0");
  clock.innerHTML = `${year}년 ${month}월 ${day}일 ${hour}:${minute}:${second}`;
}, 1000);
