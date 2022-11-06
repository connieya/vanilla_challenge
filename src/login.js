const loginForm = document.querySelector("#login-form");
const nickName = document.querySelector("#login-form input");
const mainForm = document.querySelector("#main-form");
const greeting = document.querySelector("#welcome");
const userInfo = document.querySelector("#user-info");
const container = document.querySelector("#container");
const HIDDEN_CLASSNAME = "hidden";
const NICKNAME_KEY = "nickname";

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  localStorage.setItem(NICKNAME_KEY, nickName.value);
  paintWelcomPate(nickName.value);
  nickName.value = "";
});

const paintWelcomPate = (name) => {
  loginForm.style.display = "none";
  mainForm.classList.remove(HIDDEN_CLASSNAME);
  userInfo.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText = `${name}님 반가워요!~`;
};

const savedNickname = localStorage.getItem(NICKNAME_KEY);

if (savedNickname) {
  paintWelcomPate(savedNickname);
} else {
  mainForm.classList.add("hidden");
  loginForm.style.display = "flex";
}
