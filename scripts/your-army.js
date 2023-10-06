import LocalStorageModule from "./modules/LocalStorageModule.js";

const outputArmySection = document.getElementById("output-section");
const yourArmy = LocalStorageModule.GetArmy();

const showWarriors = () => {
    const allWarriorsHTML = yourArmy
        .map(
            (warrior) => `
        <article class="grid-item col-sm-12 col-md-6 col-lg-4">
            <div class="shadow border border-rounded p-1 card h-100 d-flex flex-column justify-content-end">
                <div class="card-content mb-auto">
                    <img src="images/${warrior.img}" alt="${warrior.name}" class="card-img-top imgSize warrior-image">
                    <h2>${warrior.name}</h2>
                    <p>Health: ${warrior.health}</p>
                </div>
            </div>
        </article>
    `
        )
        .join("");

    appendToOutputSection(allWarriorsHTML); // Use append function to add to section
};

const showArmyEquipment = () => {
    const armyEquipment = LocalStorageModule.GetInventory();
    let allEquipmentHTML = "";

    armyEquipment.forEach((equipment) => {
        const equipmentHTML = `
        <article class="grid-item col-sm-12 col-md-6 col-lg-4">
            <div class="shadow border border-rounded p-1 card h-100 d-flex flex-column justify-content-end">
                <div class="card-content mb-auto">
                    <img src="images/${equipment.image}" alt="${equipment.name}" class="card-img-top imgSize">
                    <h2>${equipment.name}</h2>
                </div>
            </div>
        </article>
        `;

        allEquipmentHTML += equipmentHTML;
    });

    appendToOutputSection(allEquipmentHTML); // Use append function to add to section
};

// Function to append content to the output section
const appendToOutputSection = (content) => {
    outputArmySection.innerHTML += content;
};

document.addEventListener("DOMContentLoaded", () => {
    showWarriors();
    showArmyEquipment();
});
