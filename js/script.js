const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");
const hero = document.querySelector(".hero");

hamburger.addEventListener("click", function () {
  mobileMenu.classList.toggle("show-mobile-menu");
  hero.classList.toggle('reduce-hero-height')
});

