(() => {
  const bars = document.querySelector(".bars");
  const nav = document.querySelector(".nav-links");
  const cross = document.querySelector(".cross");

  bars.addEventListener("click", () => {
    nav.classList.remove("nav-smooth");
    nav.classList.toggle("nav-active");
  });

  cross.addEventListener("click", () => {
    nav.classList.remove("nav-active");
    nav.classList.toggle("nav-smooth");
  });
})();
