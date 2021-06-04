// Event Area
const left = document.querySelector(".left");
const right = document.querySelector(".right");
const container = document.querySelector(".container");

left.addEventListener("mouseenter", () => {
  container.classList.add("hover-left");
});

left.addEventListener("mouseleave", () => {
  container.classList.remove("hover-left");
});

right.addEventListener("mouseenter", () => {
  container.classList.add("hover-right");
});

right.addEventListener("mouseleave", () => {
  container.classList.remove("hover-right");
});

const slidingIntoHerDms = () => {
  const bars = document.querySelector(".bars");
  const nav = document.querySelector(".nav-links");
  const cross = document.querySelector(".cross");

  bars.addEventListener("click", () => {
    nav.classList.remove("nav-smooth");
    nav.classList.add("nav-active");
  });

  cross.addEventListener("click", () => {
    nav.classList.remove("nav-active");
    nav.classList.toggle("nav-smooth");
  });
};

slidingIntoHerDms();
