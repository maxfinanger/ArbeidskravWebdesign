import WarriorModule from "./Modules/WarriorModule.js";

const warriorDiv = document.getElementById("warrior-div");
const warriors = WarriorModule.getAll();
console.log(warriors);

const showWarriors = () => {
    warriorDiv.innerHTML = "";

    warriors.forEach((warrior) => {
        const warriorItem = document.createElement("li");
        const htmlTxt = `
            <div class="warrior">
                <img src="images/${warrior.img}" alt="${warrior.name}" />
                <div class="warrior-info">
                    <h2>${warrior.name}</h2>
                    <p>Health: ${warrior.health}</p>
                </div>
            </div>
        `;
        warriorItem.innerHTML = htmlTxt;
        warriorDiv.appendChild(warriorItem);
    });
};

// Immediately invoke the showWarriors function
(() => {
    showWarriors();
})();
