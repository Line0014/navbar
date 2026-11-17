document.addEventListener("DOMContentLoaded", init);

function init() {
  const navbar = document.querySelector(".navbar");
  const nav_toggle = document.querySelector(".navbar__toggle");

  function toggleNav() {
    navbar.classList.toggle("open");
  }

  nav_toggle && nav_toggle.addEventListener("click", toggleNav);
}
