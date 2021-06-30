const hamburger = document.querySelector(".hamburger");
const navBar = document.querySelector(".nav-bar");
const hero = document.querySelector(".hero");

hamburger.addEventListener("click", function () {
  navBar.classList.toggle("show-menu");
  if (scrollY < 90) {
    hero.classList.toggle('zoom-hero');
  }
  else {
    hero.classList.remove('zoom-hero');
  }
});

window.addEventListener("scroll", function() {
  if (scrollY > 90) {
    navBar.classList.add('fixed-bar');
  }
  else {
    navBar.classList.remove('fixed-bar');
  }

})