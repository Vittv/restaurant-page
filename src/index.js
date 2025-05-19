import "./styles.css";
import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";

import backgroundImage from "./assets/backgroundrestaurant.jpg";

function setBackground() {
  // remove existing background if it exists
  // mostly doing this so we don't keep making new backgrounds on top of each other on page load
  const existing = document.getElementById("background-image");
  if (existing) existing.remove();

  // new background container
  const bg = document.createElement("div");
  bg.id = "background-image";
  bg.style.position = "fixed";
  bg.style.top = "0";
  bg.style.left = "0";
  bg.style.width = "100vw";
  bg.style.height = "100vh";
  bg.style.zIndex = "-2";
  bg.style.backgroundImage = `url(${backgroundImage})`;
  bg.style.backgroundSize = "cover";
  bg.style.backgroundPosition = "center";
  bg.style.backgroundRepeat = "no-repeat";

  // fading gradient overlay
  const gradient = document.createElement("div");
  gradient.style.position = "fixed";
  gradient.style.top = "0";
  gradient.style.left = "0";
  gradient.style.width = "100vw";
  gradient.style.height = "100vh";
  gradient.style.zIndex = "-1";
  gradient.style.pointerEvents = "none";
  gradient.style.background = "linear-gradient(to bottom, rgba(0, 0, 0, 0) 35%, #111 100%)";

  document.body.appendChild(bg);
  document.body.appendChild(gradient);
}

setBackground();
loadHome();

document.addEventListener("DOMContentLoaded", () => {
  const homeBtn = document.querySelector(".nav-container .nav-btn:nth-child(1)");
  const menuBtn = document.querySelector(".nav-container .nav-btn:nth-child(2)");
  const contactBtn = document.querySelector(".nav-container .nav-btn:nth-child(3)");
  const homeVitt = document.querySelector(".home-vitt");

  homeBtn.addEventListener("click", loadHome);
  menuBtn.addEventListener("click", loadMenu);
  contactBtn.addEventListener("click", loadContact);
  homeVitt.addEventListener("click", loadHome);
});
