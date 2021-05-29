const navSlide = () => {
  const bars = document.querySelector(".bars");
  const nav = document.querySelector(".nav-links");
  const cross = document.querySelector(".cross");

  bars.addEventListener("click", () => {
    //To toggle navigation drawer
    nav.classList.toggle("nav-active");
  });

  //toggeling cross button
  cross.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
  });
};

navSlide();
