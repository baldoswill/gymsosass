const menuBar = document.querySelector(".nav__menu-bar");
const navLinks = document.querySelector(".nav__links");
const links = document.querySelectorAll(".nav__link");
const sections = document.querySelectorAll("section");
const home = document.querySelector("#home");

menuBar.addEventListener("click", function (e) {
  this.classList.toggle("nav__menu-bar--active");

  if (this.classList.contains("nav__menu-bar--active")) {
    navLinks.classList.add("nav__links--active");
  } else {
    navLinks.classList.remove("nav__links--active");
  }
});

links.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    navLinks.classList.remove("nav__links--active");
    menuBar.classList.remove("nav__menu-bar--active");
    let id = this.getAttribute("href");
    document.querySelector(id).scrollIntoView({
      behavior: "smooth",
    });
  });
});

const options = {};

const observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    }
    console.log(entry.target);
    links.forEach((link) => {
      if ("#" + entry.target.id === link.getAttribute("href")) {
        link.classList.add("nav__link--active");
      } else {
        link.classList.remove("nav__link--active");
      }
    });
  });
}, options);

sections.forEach((section) => {
  observer.observe(section);
});

// observer.observe(home);
