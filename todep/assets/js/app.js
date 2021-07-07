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

const options = {
  rootMargin: "-50% 0px -50% 0px",
};

const observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    }

    let targetElementId = document.querySelector("#" + entry.target.id);

    links.forEach((link) => {
      if (targetElementId.dataset.link === link.dataset.link) {
        link.classList.add("nav__link--active");
      } else {
        link.classList.remove("nav__link--active");
      }
    });

    // let el = document.querySelector("#" + entry.target.id);

    // if (el) {
    //   console.log(el.className);
    //   if (!el.classList.contains(`${el.className}__wrapper--fadeOut`)) {
    //     el.classList.add(`${el.className}__wrapper--fadeOut`);
    //   } else {
    //     el.classList.remove(`${el.className}__wrapper--fadeOut`);
    //   }
    // }
  });
}, options);

const optionsOnce = {};

const observerOnce = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    }

    if (entry.target) {     
      entry.target.classList.add(`${entry.target.className}__wrapper--fadeOut`);      
      observer.unobserve(entry.target);
    }
  });
}, optionsOnce);

sections.forEach((section) => {
  observer.observe(section);
  let el = document.querySelector("#" + section.id);
  observerOnce.observe(el);
});

// observer.observe(home);
