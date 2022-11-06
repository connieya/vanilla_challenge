const logoutBtn = document.querySelector("#logout");
logoutBtn.addEventListener("click", () => {
  localStorage.removeItem("nickname");
  mainForm.classList.add("hidden");
  userInfo.classList.add("hidden");
  loginForm.style.display = "flex";
});

console.log(userInfo);
