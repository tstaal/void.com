var burger = document.getElementById('burger');
var menu = document.getElementById('menu');

burger.addEventListener("click", function (ev) {
burger.classList.toggle("active");
  menu.classList.toggle("hidden");
});