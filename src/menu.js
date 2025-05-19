export default function loadMenu() {
    const content = document.getElementById("content");
    content.innerHTML = "";

    const menuSection = document.createElement("section");
    menuSection.classList.add("menu");

    const heading = document.createElement("h1");
    heading.textContent = "Menu";

    const categories = {
        "Starters": [
            "Burrata & Heirloom Tomatoes – Creamy burrata, basil oil, balsamic glaze",
            "Garlic Truffle Fries – Truffle oil, Parmesan, fresh herbs",
            "Crispy Calamari – Served with lemon aioli",
            "Roasted Beet Salad – Goat cheese, walnuts, citrus vinaigrette"
        ],
        "Pastas": [
            "Spaghetti Carbonara – Pancetta, egg yolk, pecorino",
            "Lobster Ravioli – Saffron cream sauce",
            "Wild Mushroom Risotto – White wine, Parmesan",
            "Penne Arrabbiata – Spicy tomato garlic sauce"
        ],
        "Mains": [
            "Pan-Seared Salmon – Asparagus, lemon herb butter",
            "Braised Short Rib – Mashed potatoes, red wine reduction",
            "Chicken Parmigiana – Marinara, mozzarella, spaghetti",
            "Eggplant Stack – Ricotta, spinach, pomodoro sauce"
        ],
        "Desserts": [
            "Tiramisu – Espresso-soaked ladyfingers, mascarpone",
            "Lemon Panna Cotta – Fresh berries, mint",
            "Chocolate Lava Cake – Vanilla gelato"
        ],
        "Drinks": [
            "House Red / White Wine",
            "Sparkling Water & Sodas",
            "Signature Cocktails",
            "Espresso & Cappuccino"
        ]
    };

    menuSection.appendChild(heading);

    for (const category in categories) {
        const sectionTitle = document.createElement("h3");
        sectionTitle.textContent = category;
        menuSection.appendChild(sectionTitle);

        const itemList = document.createElement("div");
        itemList.classList.add("menu-list");

        categories[category].forEach(item => {
            const listItem = document.createElement("p");

            const [name, description] = item.split("–");

            const nameSpan = document.createElement("span");
            nameSpan.classList.add("menu-item-name");
            nameSpan.textContent = name.trim();

            listItem.appendChild(nameSpan);

            if (description) {
                listItem.append(" – " + description.trim());
            }

            itemList.appendChild(listItem);
        });

        menuSection.appendChild(itemList);
    }

    content.appendChild(menuSection);
}
