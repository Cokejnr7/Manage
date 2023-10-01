const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector("#menu");
const newsLetter = document.querySelector("#news-letter");
const form = document.querySelector(".form");
const errorParagraph = document.querySelector(".error");
const navigators = document.querySelectorAll(".navigators div");
const mobileCard = document.querySelector(".mobile-card");

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

const data = [
  {
    imageSrc: "img/avatar-anisha.png",
    name: "Anisha Li",
    text: `"Manage has supercharged our team’s workflow. 
          The ability to maintain visibility on larger milestones at all times
          keeps everyone motivated."`,
  },
  {
    imageSrc: "img/avatar-ali.png",
    name: "Ali Bravo",
    text: `"we have been able to cancel so many other subcriptions since
           using Mange. thers is no more cross-channel confudion and everyone
           is much more focused."`,
  },
  {
    imageSrc: "img/avatar-richard.png",
    name: "Richard watts",
    text: `"Manage allows us to provide structure and process. 
            It keeps us organized and focused. 
            I can’t stop recommending them to everyone I talk to!"`,
  },
  {
    imageSrc: "img/avatar-shanai.png",
    name: "Shanai Gough",
    text: `“Their software allows us to track, 
            manage and collaborate on our projects from anywhere.
            It keeps the whole team in-sync without being intrusive.”`,
  },
];

let currentIndex = 0;
const brightRed = "hsl(12, 88%, 59%)";

navigators[currentIndex].style.backgroundColor = brightRed;

function changeBackgroundColor() {
  if (currentIndex < data.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }

  navigators[currentIndex].style.backgroundColor = brightRed;
  mobileCard.children[0].setAttribute("src", data[currentIndex].imageSrc);
  mobileCard.children[1].textContent = data[currentIndex].name;
  mobileCard.children[2].textContent = data[currentIndex].text;
}

setInterval(() => {
  navigators.forEach((navigator) => {
    navigator.style.backgroundColor = "white";
  });
  changeBackgroundColor();
}, 5000);
