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

const projects = document.querySelectorAll(".single_project");



[...projects].map((project) => {
  project.addEventListener("click", () => {
    console.log("clicked");
  });
})