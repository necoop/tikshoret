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
