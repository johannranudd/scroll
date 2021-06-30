const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");
const hero = document.querySelector(".hero");
const navBar = document.querySelector(".nav-bar");

hamburger.addEventListener("click", function () {
  mobileMenu.classList.toggle("show-mobile-menu");
  hero.classList.toggle('reduce-hero-height')
});

window.addEventListener("scroll", function () {
  // console.log(scrollY);
  if (scrollY > 90) {
    navBar.classList.add('fixed-bar');
    mobileMenu.classList.add('scroll-mobile-menu');
  }
  else {
    navBar.classList.remove('fixed-bar');
  }
})