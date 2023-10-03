import WarriorModule from "./Modules/WarriorModule.js";

const warrior1Btn = document.getElementById("warrior-button-101");
const warrior2Btn = document.getElementById("warrior-button-102");
const warrior3Btn = document.getElementById("warrior-button-103");
const warrior4Btn = document.getElementById("warrior-button-104");
const warrior5Btn = document.getElementById("warrior-button-105");
const warrior6Btn = document.getElementById("warrior-button-106");
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
            <button class="mt-auto" id"warrior-button-${warrior.id}">Buy for ${warrior.price} gold</button>
        </div>
    </article>
    `;

        allWarriorsHTML += warriorHTML;
    });

    warriorDiv.innerHTML = allWarriorsHTML;
};

const getWarrior = (id) => {
    const warriors = WarriorModule.getAll();
    const warrior = warriors.find((warrior) => warrior.id === id);
    console.log(warrior);
};

const setEvents = () => {
    warrior1Btn.addEventListener("click", () => {
        getWarrior(101);
    });
    warrior2Btn.addEventListener("click", () => {
        getWarrior(102);
    });
    warrior3Btn.addEventListener("click", () => {
        getWarrior(103);
    });
    warrior4Btn.addEventListener("click", () => {
        getWarrior(104);
    });
    warrior5Btn.addEventListener("click", () => {
        getWarrior(105);
    });
    warrior6Btn.addEventListener("click", () => {
        getWarrior(106);
    });
};

// Immediately invoke the showWarriors function
(() => {
    setEvents();
    showWarriors();
})();
