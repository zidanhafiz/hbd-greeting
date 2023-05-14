const paragraph = document.querySelectorAll(".paragraph");
const modal = document.querySelector(".modal");
const audio = document.querySelector(".backsound");

const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const title = document.querySelector(".title");

const animeGreet = `<div class="anime-greet">
<div class="close-btn"><i class="fa-regular fa-circle-xmark" style="color: #ffffff"></i></div>
<div class="ayaka">
  <audio autoplay src="./src/ayaka-hbd-2.wav"></audio>
  <div class="pict">
    <img src="./src/ayakagif.gif" alt="ayaka" />
  </div>
  <div class="text">
    <p>Selamat ulang tahun, Akhza-san!</p>
    <p>Semoga tetap sehat dan panjang umur</p>
    <p>Kamisato Ayaka</p>
    <p>Istri Zidan 😊</p>
  </div>
</div>
</div>`;

let i = 0;

nextBtn.addEventListener("click", function () {
  if (i < 26) {
    paragraph[i].classList.toggle("hidden");
    i++;
    paragraph[i].classList.toggle("hidden");
  } else if (i >= 26) {
    modal.innerHTML = animeGreet;
    audio.pause();
    const closeBtn = document.querySelector(".close-btn");
    closeBtn.addEventListener("click", () => {
      modal.innerHTML = "";
      audio.play();
    });
  }
});

prevBtn.addEventListener("click", function () {
  if (i > 0) {
    paragraph[i].classList.toggle("hidden");
    i--;
    paragraph[i].classList.toggle("hidden");
  }
});

// script for ballon
const balloonContainer = document.getElementById("balloon-container");

function random(num) {
  return Math.floor(Math.random() * num);
}

function getRandomStyles() {
  var r = random(255);
  var g = random(255);
  var b = random(255);
  var mt = random(200);
  var ml = random(50);
  var dur = random(5) + 5;
  return `
  background-color: rgba(${r},${g},${b},0.7);
  color: rgba(${r},${g},${b},0.7); 
  box-shadow: inset -7px -3px 10px rgba(${r - 10},${g - 10},${b - 10},0.7);
  margin: ${mt}px 0 0 ${ml}px;
  animation: float ${dur}s ease-in infinite
  `;
}

function createBalloons(num) {
  for (var i = num; i > 0; i--) {
    var balloon = document.createElement("div");
    balloon.className = "balloon";
    balloon.style.cssText = getRandomStyles();
    balloonContainer.append(balloon);
  }
}

function removeBalloons() {
  balloonContainer.style.opacity = 0;
  setTimeout(() => {
    balloonContainer.remove();
  }, 500);
}

window.addEventListener("load", () => {
  createBalloons(30);
});

window.addEventListener("click", () => {
  removeBalloons();
});
