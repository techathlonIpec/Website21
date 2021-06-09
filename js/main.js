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

let max_particles = 1000;
let bag = document.querySelector(".title");

var tela = document.createElement("canvas");
tela.width = $(window).width();
tela.height = $(window).height();
$(bag).append(tela);

var canvas = tela.getContext("2d");

class Particle {
  constructor(canvas, progress) {
    let random = Math.random();
    this.progress = 0;
    this.canvas = canvas;

    this.x =
      $(window).width() / 2 + (Math.random() * 1000 - Math.random() * 1000);
    this.y =
      $(window).height() / 2 + (Math.random() * 500 - Math.random() * 500);
    this.s = Math.random() * 1;
    this.a = 0;
    this.w = $(window).width();
    this.h = $(window).height();
    this.radius = random > 0.2 ? Math.random() * 1 : Math.random() * 3;
    this.color = random > 0.2 ? "#2E4765" : "#D11224";
    this.radius = random > 0.8 ? Math.random() * 2 : this.radius;
    this.color = random > 0.8 ? "#2E4765" : this.color;

    // this.color  = random > .1 ? "#ffae00" : "#f0ff00" // Alien
    this.variantx1 = Math.random() * 300;
    this.variantx2 = Math.random() * 400;
    this.varianty1 = Math.random() * 100;
    this.varianty2 = Math.random() * 120;
  }

  render() {
    this.canvas.beginPath();
    this.canvas.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    this.canvas.lineWidth = 2;
    this.canvas.fillStyle = this.color;
    this.canvas.fill();
    this.canvas.closePath();
  }

  move() {
    this.x += Math.cos(this.a) * this.s;
    this.y += Math.sin(this.a) * this.s;
    this.a += Math.random() * 0.8 - 0.4;

    if (this.x < 0 || this.x > this.w - this.radius) {
      return false;
    }

    if (this.y < 0 || this.y > this.h - this.radius) {
      return false;
    }
    this.render();
    this.progress++;
    return true;
  }
}

let particles = [];
let init_num = popolate(max_particles);
function popolate(num) {
  for (var i = 0; i < num; i++) {
    setTimeout(
      function () {
        particles.push(new Particle(canvas, i));
      }.bind(this),
      i * 20
    );
  }
  return particles.length;
}

function clear() {
  canvas.globalAlpha = 0.05;
  canvas.fillStyle = "#000155";
  canvas.fillStyle = "#000021"; // Alien
  canvas.fillRect(0, 0, tela.width, tela.height);
  canvas.globalAlpha = 1;
}

function update() {
  particles = particles.filter(function (p) {
    return p.move();
  });
  if (particles.length < init_num) {
    popolate(1);
  }
  clear();
  requestAnimationFrame(update.bind(this));
}
update();

AOS.init();
