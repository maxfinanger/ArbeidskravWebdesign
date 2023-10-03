import WarriorModule from "./Modules/WarriorModule.js";

const warriorDiv = document.getElementById("warrior-div");
const warriors = WarriorModule.getAll();
console.log(warriors);

const showWarriors = () => {
    warriorDiv.innerHTML = "";

    warriors.forEach((warrior) => {
        htmlTxt = "";
        const warriorItem = document.createElement("li");
        htmlTxt += `
            <div class="warrior">
                <img src="img/${warrior.img}" alt="${warrior.name}" />
                <div class="warrior-info">
                    <h2>${warrior.name}</h2>
                    <p>Health: ${warrior.health}</p>
                </div>
            </div>
        `;
        warriorDiv.innerHTML = htmlTxt;
    });

    (function () {
        showWarriors();
    })();
};
