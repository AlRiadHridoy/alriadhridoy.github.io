
  const btn = document.querySelector("#toggle_theme");
  const theme = document.querySelector("html");
  
  btn.addEventListener("click", () => {
    theme.classList.toggle("dark")
  });

  // menu

const menu = document.querySelector(".menu_btn");
const menuHeight = document.querySelector(".menu_height");
const menuHide = document.querySelector(".menu_hide");
  
menu.addEventListener("click", () => {
    menuHeight.classList.toggle("h-screen")
    menuHide.classList.toggle("flex")
    menuHide.classList.toggle("hidden")
  })
