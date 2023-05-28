const paragraph = document.querySelectorAll(".paragraph");
const modal = document.querySelector(".modal");
const audio = document.querySelector(".backsound");
const container = document.querySelector(".container");

const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const title = document.querySelector(".title");

const overlay = document.getElementById("popup1");

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

overlay.addEventListener("click", () => {
  overlay.classList.add("hidden-fadeOut");
  setTimeout(() => {
    overlay.classList.remove("hidden-fadeOut");
    overlay.classList.add("hidden");
  }, 1300);
  container.classList.remove("hidden");
  createBalloons(30);
  audio.play();
});

window.addEventListener("load", () => {
  container.classList.add("hidden");
});

balloonContainer.addEventListener("click", () => {
  removeBalloons();
});

let i = 0;
let j = 0;
let k = 0;

window.addEventListener("click", () => {
  if (i >= 30) {
    j++;
    if (j < 2) {
      k = 1;
      setTimeout(() => {
        modal.innerHTML = animeGreet;
        audio.volume = 0.3;
        const closeBtn = document.querySelector(".close-btn");
        closeBtn.addEventListener("click", () => {
          modal.innerHTML = "";
          audio.volume = 1;
        });
        k = 0;
      }, 3000);
    }
  }
});

nextBtn.addEventListener("click", function () {
  if (i < 30) {
    paragraph[i].classList.toggle("hidden");
    paragraph[i].classList.toggle("now");
    i++;
    paragraph[i].classList.toggle("hidden");
    paragraph[i].classList.toggle("now");
  } else if (i >= 30) {
    if (k === 0) {
      modal.innerHTML = animeGreet;
      audio.volume = 0.3;
      const closeBtn = document.querySelector(".close-btn");
      closeBtn.addEventListener("click", () => {
        modal.innerHTML = "";
        audio.volume = 1;
      });
    }
  }
});

prevBtn.addEventListener("click", function () {
  if (i > 0) {
    paragraph[i].classList.toggle("hidden");
    i--;
    paragraph[i].classList.toggle("hidden");
    j = 0;
  }
});
