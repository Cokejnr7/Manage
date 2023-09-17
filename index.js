const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector("#menu");
const newsLetter = document.querySelector("#news-letter");
const form = document.querySelector(".form");
const errorParagraph = document.querySelector(".error");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  menu.classList.toggle("flex");
  menu.classList.toggle("hidden");
});

const re =
  /^([a-zA-z0-9\.-]+)@([a-zA-z0-9]+)\.([a-zA-Z]{2,8})(\.[a-zA-Z]{2,8})?$/;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (re.test(newsLetter.value)) {
    errorParagraph.classList.add("hidden");
    newsLetter.value = "";
  } else {
    errorParagraph.classList.remove("hidden");
  }
});
