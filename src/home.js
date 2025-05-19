export default function loadHome() {
    const content = document.getElementById("content");
    content.innerHTML = "";

    const homeSection = document.createElement("section");
    const heroSection = document.createElement("div");
    heroSection.classList.add("hero");

    const heading = document.createElement("h1");
    const headingDescription = document.createElement("p");
    heading.textContent = "Welcome to Vitt's";
    headingDescription.textContent = "Bringing comfort and flavor together since 2025";

    const bookReservationButton = document.createElement("button");
    bookReservationButton.classList.add("bookReservationButton");
    bookReservationButton.textContent = "Make a Reservation";

    const aboutSection = document.createElement("div");
    aboutSection.classList.add("about");
    const aboutDescription = document.createElement("p");
    aboutDescription.textContent = "Vitt's is where timeless ambiance meets modern comfort. Our chefs craft each dish with care, using only the finest ingredients. Join us for an experience that indulges both palate and soul."

    const hoursSection = document.createElement("div");
    hoursSection.classList.add("hours");
    const hoursTitle = document.createElement("h3");
    hoursTitle.textContent = "Hours of Operation";
    const weekDays = document.createElement("h4");
    const weekDaysDescriptionOne = document.createElement("p");
    const weekDaysDescriptionTwo = document.createElement("p");
    const weekEnd = document.createElement("h4");
    const weekEndDescriptionOne = document.createElement("p");
    const weekEndDescriptionTwo = document.createElement("p");

    weekDays.textContent = "Monday – Friday";
    weekDaysDescriptionOne.textContent = "Lunch: 11:30 AM – 2:30 PM";
    weekDaysDescriptionTwo.textContent = "Dinner: 5:00 PM – 10:00 PM";

    weekEnd.textContent = "Saturday – Sunday";
    weekEndDescriptionOne.textContent = "Brunch: 10:00 AM – 2:00 PM";
    weekEndDescriptionTwo.textContent = "Dinner: 5:00 PM – 11:00 PM";

    const locationSection = document.createElement("div");
    locationSection.classList.add("location");
    const locationTitle = document.createElement("h3");

    const mapIframe = document.createElement("iframe");
    mapIframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.870374566964!2d-73.96024778459347!3d40.70983364549026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259581b8355af%3A0xd0fcb1ec4d43b0!2sWilliamsburg%2C%20Brooklyn%2C%20NY%2011211!5e0!3m2!1sen!2sus!4v1715999437893!5m2!1sen!2sus";
    mapIframe.width = "100%";
    mapIframe.height = "300";
    mapIframe.style.border = "";
    mapIframe.allowFullscreen = true;
    mapIframe.loading = "lazy";
    mapIframe.referrerPolicy = "no-referrer-when-downgrade";

    const locationDescriptionOne = document.createElement("p");
    const locationDescriptionTwo = document.createElement("p");
    const locationDescriptionThree = document.createElement("p");
    const locationDescriptionFour = document.createElement("p");

    locationTitle.textContent = "Location";
    locationDescriptionOne.textContent = "Vitt's Restaurant";
    locationDescriptionTwo.textContent = "1428 Ambrosia Avenue";
    locationDescriptionThree.textContent = "Williamsburg Brooklyn, NY 11211";
    locationDescriptionFour.textContent = "United States";

    heroSection.appendChild(heading);
    heroSection.appendChild(headingDescription);

    aboutSection.appendChild(bookReservationButton);
    aboutSection.appendChild(aboutDescription);

    hoursSection.appendChild(hoursTitle);
    hoursSection.appendChild(weekDays);
    hoursSection.appendChild(weekDaysDescriptionOne);
    hoursSection.appendChild(weekDaysDescriptionTwo);
    hoursSection.appendChild(weekEnd);
    hoursSection.appendChild(weekEndDescriptionOne);
    hoursSection.appendChild(weekEndDescriptionTwo);

    locationSection.appendChild(locationTitle);
    locationSection.appendChild(mapIframe);
    locationSection.appendChild(locationDescriptionOne);
    locationSection.appendChild(locationDescriptionTwo);
    locationSection.appendChild(locationDescriptionThree);
    locationSection.appendChild(locationDescriptionFour);

    homeSection.appendChild(heroSection);
    homeSection.appendChild(aboutSection);
    homeSection.appendChild(hoursSection);
    homeSection.appendChild(locationSection);
    content.appendChild(homeSection);

}