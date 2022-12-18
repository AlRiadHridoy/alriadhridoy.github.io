// Smooth scrolling
const navLinks = [...document.querySelectorAll(".nav_links a")];
const body = document.querySelector("body");
const html = document.querySelector("html");

function hideMenu() {
  menuHide.classList.toggle("flex");
  menuHide.classList.toggle("hidden");
}

navLinks.map((link) => {
  link.addEventListener("click", function (e) {
    hideMenu()
    lineToggle();
    e.preventDefault();
    let section = document.querySelector(this.hash);
    let navHeight = document.querySelector("nav").clientHeight;
    window.scrollTo(0, section.offsetTop - navHeight);
  });
});

// Dark Mode
const btn = document.querySelectorAll("#toggle_theme");
const theme = document.querySelector("html");
[...btn].map((el) =>
  el.addEventListener("click", () => {
    theme.classList.toggle("dark");
  })
);
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
  hideMenu()
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



