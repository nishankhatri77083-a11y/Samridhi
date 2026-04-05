// PASSWORD
  function checkPassword() {
  let pass = document.getElementById("password").value;
  let box = document.querySelector(".lock-box");

  if (pass === "samridhi"|| "nishan") {
    document.getElementById("lockScreen").style.display = "none";
    document.getElementById("mainContent").classList.remove("hidden");
    type();
  } else {
    document.getElementById("error").innerText = "Wrong password 💔";

    // Shake effect
    box.classList.add("shake");
    setTimeout(() => box.classList.remove("shake"), 400);
  }
}

// Typing
let text = "I don’t know if you’ll ever see this... but I made something for you.";
let i = 0;

function type() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(type, 50);
  }
}

// Scroll
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Secret
function reveal() {
  document.getElementById("secret").classList.remove("hidden");
}

// Music
let music = document.getElementById("music");
let btn = document.getElementById("musicBtn");
let slider = document.getElementById("volumeSlider");

let playing = false;

// Default volume
music.volume = 0.3;

// Toggle play/pause (no autoplay)
function toggleMusic() {
  if (playing) {
    music.pause();
    btn.innerHTML = "▶️";
  } else {
    music.play();
    btn.innerHTML = "⏸️";
  }
  playing = !playing;
}

// Volume control
slider.addEventListener("input", function() {
  music.volume = this.value;
});

// Modal
function openModal(img) {
  document.getElementById("modal").classList.remove("hidden");
  document.getElementById("modalImg").src = img.src;
}

function closeModal() {
  document.getElementById("modal").classList.add("hidden");
}

// Hearts
setInterval(() => {
  let heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 10 + "px";
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 5000);
}, 500);
document.addEventListener("click", function(e) {
  let spark = document.createElement("div");
  spark.innerHTML = "🦋";
  spark.style.position = "fixed";
  spark.style.left = e.clientX + "px";
  spark.style.top = e.clientY + "px";
  spark.style.pointerEvents = "none";

  document.body.appendChild(spark);

  setTimeout(() => spark.remove(), 800);
});