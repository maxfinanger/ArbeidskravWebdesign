import WarriorModule from "./Modules/WarriorModule.js";

const warriorDiv = document.getElementById("warrior-div");
const warriors = WarriorModule.getAll();
console.log(warriors);

const showWarriors = () => {
    let allWarriorsHTML = "";

    warriors.forEach((warrior) => {
        const warriorHTML = `
        <article class="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
        <div class="shadow border border-rounded p-1 card h-100 d-flex flex-column">
            <img src="images/${warrior.img}" alt="${warrior.name}" />
            <h2>${warrior.name}</h2>
            <p>Health: ${warrior.health}</p>
            <button class="mt-auto">Buy for ${warrior.price} gold</button>
        </div>
    </article>
    `;

        allWarriorsHTML += warriorHTML;
    });

    warriorDiv.innerHTML = allWarriorsHTML;
};

// Immediately invoke the showWarriors function
(() => {
    showWarriors();
})();
