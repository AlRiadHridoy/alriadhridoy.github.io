const btn = document.querySelectorAll("#toggle_theme");
const theme = document.querySelector("html");

[...btn].map((el) =>
  el.addEventListener("click", () => {
    theme.classList.toggle("dark");
  })
);

const menu = document.querySelector(".menu_btn");
const menuHeight = document.querySelector(".menu_height");
const menuHide = document.querySelector(".menu_hide");

menu.addEventListener("click", () => {
  menuHeight.classList.toggle("h-screen");
  menuHide.classList.toggle("flex");
  menuHide.classList.toggle("hidden");
});


const form = document.querySelector("form")

form.addEventListener("submit", (e) => {
  e.preventDefault()
})

// projects
const body = document.querySelector("body");
const preview = [...document.querySelectorAll(".preview")];
const previewClose = [...document.querySelectorAll(".preview_close")];
const projects = [...document.querySelectorAll(".single_project")];


projects.map((project, index) => {
  project.addEventListener("click", () => {
    body.classList.add("overflow-hidden");
    preview[index].classList.remove("hidden");
  });
})
previewClose.map((item, index) => {
  item.addEventListener("click", () => {
    body.classList.remove("overflow-hidden");
    preview[index].classList.add("hidden");
  });
});


