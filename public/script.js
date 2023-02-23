const toggle = document.getElementById("toggleDark");
const body = document.querySelector("body");

toggle.addEventListener("click", function () {
  this.classList.toggle("bi-moon");
  if (this.classList.toggle("bi-brightness-high-fill")) {
    body.style.background =
      "linear-gradient(90deg, rgb(255, 0, 119) 0%, rgb(225, 0, 255) 100%)";
    body.style.color = "#6B056F";
    body.style.transition = "2s";
  } else {
    body.style.background =
      "linear-gradient(90deg, rgb(76, 22, 83) 0%, rgb(85, 0, 50) 100%)";
    body.style.color = "#FE1CD9";
    body.style.transition = "2s";
  }
});
