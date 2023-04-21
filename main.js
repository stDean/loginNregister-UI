const logRegBox = document.querySelector(".logreg_box");
const loginLink = document.querySelector(".login_link");
const regLink = document.querySelector(".reg_link");

regLink.addEventListener("click", () => {
  logRegBox.classList.add("active");
});

loginLink.addEventListener("click", () => {
  logRegBox.classList.remove("active");
});