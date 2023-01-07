// Меню навигации
let navBotMainSubmenu = document.querySelectorAll(".nav-bot-main-more");
let navBotTemasLink = document.querySelector(".nav-bot-temas-link");

navBotMainSubmenu.forEach((element) => {
  element.addEventListener("mouseover", border);
});

navBotMainSubmenu.forEach((element) => {
  element.addEventListener("mouseleave", noBorder);
});

function border() {
  let navBot = document.querySelector(".nav-bot");
  navBot.classList.add("nav-bot-bordered");
  navBotTemasLink.classList.add("nav-bot-temas-link-none");
}
function noBorder() {
  let navBot = document.querySelector(".nav-bot");
  navBot.classList.remove("nav-bot-bordered");
  navBotTemasLink.classList.remove("nav-bot-temas-link-none");
}

// Кнопка со спиннером
let buy = document.querySelectorAll(".buy");
let button = document.querySelector(".button");

button.addEventListener("click", makeOrder);

function makeOrder() {
  buy.forEach((element) => {
    element.classList.toggle("visability");
  });
  button.classList.toggle("active");
  button.setAttribute("disabled", true);
}
