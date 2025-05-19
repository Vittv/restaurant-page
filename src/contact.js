export default function loadContact() {
    const content = document.getElementById("content");
    content.innerHTML = "";

    const contactSection = document.createElement("section");
    contactSection.classList.add("contact");

    const heading = document.createElement("h3");
    heading.textContent = "Contact";
    contactSection.appendChild(heading);

    const contactInfo = document.createElement("div");
    contactInfo.classList.add("contact-info");

    const infoItems = [
        { label: "Phone", value: "(555) 123-4567" },
        { label: "Email", value: "contact@vittsrestaurantyup.com" },
        { label: "Instagram", value: "@vittsrestaurantyup" },
        { label: "Facebook", value: "/vittsrestaurantyup" }
    ];

    infoItems.forEach(item => {
        const p = document.createElement("p");
        p.innerHTML = `<strong>${item.label}:</strong> ${item.value}`;
        contactInfo.appendChild(p);
    });

    const note = document.createElement("p");
    note.classList.add("contact-note");
    note.textContent = "We usually respond within 24 hours. For reservations, please call directly.";

    contactSection.appendChild(contactInfo);
    contactSection.appendChild(note);
    content.appendChild(contactSection);
}
