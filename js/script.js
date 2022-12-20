// Smooth scrolling
const navLinks = [...document.querySelectorAll(".nav_links a")];
const body = document.querySelector("body");
const html = document.querySelector("html");

function hideMenu() {
  menuHide.classList.toggle("flex");
  menuHide.classList.toggle("hidden");
}

let navLinkHighlight = 0;

navLinks.map((link) => {
  link.addEventListener("click", function (e) {
    // Add border
    if (navLinkHighlight) {
      navLinkHighlight.classList.remove("border-indigo-700");
      navLinkHighlight.classList.add("border-transparent");
    }
    link.classList.remove("border-transparent");
    link.classList.add("border-indigo-600");
    navLinkHighlight = link;

    hideMenu();
    lineToggle();
    e.preventDefault();
    let section = document.querySelector(this.hash);
    let navHeight = document.querySelector("nav").clientHeight;
    window.scrollTo(0, section.offsetTop - navHeight);
  });
});

const lineAnime = ["line_anime_1", "line_anime_2", "line_anime_3"];
const lines = [...document.querySelectorAll(".line")];

function lineToggle() {
  lines.map((line, index) => {
    line.classList.toggle(lineAnime[index]);
  });
}

const menu = document.querySelector(".menu_btn");
const menuHide = document.querySelector(".menu_hide");
menu.addEventListener("click", () => {
  hideMenu();
  lineToggle();
});

// Form
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
});

// projects
const preview = [...document.querySelectorAll(".preview")];
const previewClose = [...document.querySelectorAll(".preview_close")];
const projects = [...document.querySelectorAll(".single_project")];

projects.map((project, index) => {
  project.addEventListener("click", () => {
    body.classList.add("overflow-hidden");
    preview[index].classList.remove("hidden");
  });
});
previewClose.map((item, index) => {
  item.addEventListener("click", () => {
    body.classList.remove("overflow-hidden");
    preview[index].classList.add("hidden");
  });
});

// Contact
document.querySelector(".form_btn").addEventListener("click", () => {
  document.querySelector(".onSubmit").classList.remove("hidden");
});

// Store theme to local storage
// Dark Mode
const btn = document.querySelectorAll("#toggle_theme");
const theme = document.querySelector("html");

if (localStorage.getItem("theme")) {
  theme.classList.remove("dark")
  theme.classList.add(localStorage.getItem("theme"));
} else {
  localStorage.setItem("theme", "dark");
}

[...btn].map((el) =>
  el.addEventListener("click", () => {
    let mode = localStorage.getItem("theme");
    if (mode === "dark") {
      theme.classList.add("light");
      theme.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      theme.classList.remove("light");
      theme.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  })
);
