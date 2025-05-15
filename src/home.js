import backgroundImage from "./assets/backgroundrestaurant.jpg"

export default function loadHome() {
    const content = document.getElementById("content");
    content.innerHTML = "";

    const homeSection = document.createElement("section");
    const heroSection = document.createElement("div");
    heroSection.classList = "hero";

    const heading = document.createElement("h1");
    const headingDescription = document.createElement("p");
    heading.textContent = "Welcome to Vitt's"
    headingDescription.textContent = "Bringing comfort and flavor together since 2025"

    heroSection.appendChild(heading);
    heroSection.appendChild(headingDescription);
    homeSection.appendChild(heroSection);
    content.appendChild(homeSection);

    // background image
    document.body.style.backgroundImage = `url(${backgroundImage})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";

    const dishContainer = document.createElement("div");
    dishContainer.classList.add = ("dish-container");
}