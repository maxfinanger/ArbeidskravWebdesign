import WarriorModule from "./Modules/WarriorModule.js";
import LocalStorageModule from "./Modules/LocalStorageModule.js";

const warriorDiv = document.getElementById("warrior-div");
const warriors = WarriorModule.getAll();
console.log(warriors);

// shows all warriors in the warrior div
const showWarriors = () => {
    let allWarriorsHTML = "";

    warriors.forEach((warrior) => {
        const warriorHTML = `
        <article class="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
            <div class="shadow border border-rounded p-1 card h-100 d-flex flex-column justify-content-end">
                <div class="card-content mb-auto">
                    <img src="images/${warrior.img}" alt="${warrior.name}" class="card-img-top warrior-image">
                    <h2>${warrior.name}</h2>
                    <p>Health: ${warrior.health}</p>
                </div>
                <button class="mt-auto btn bg-danger text-white hover " id="warrior-button-${warrior.id}">Buy for ${warrior.price} <img src="/images/gold-coin.png" class="coin"> </button>
            </div>
        </article>
        `;

        allWarriorsHTML += warriorHTML;
    });

    warriorDiv.innerHTML = allWarriorsHTML;
};

// gets a warrior by id and adds it to the army
const getWarrior = (id) => {
    const warriors = WarriorModule.getAll();
    const warrior = warriors.find((warrior) => warrior.id === id);
    console.log(warrior);

    const army = LocalStorageModule.GetArmy();
    army.push(warrior);

    LocalStorageModule.SaveArmy(army);
    console.log(LocalStorageModule.GetArmy());
};

// adds event listeners to all warrior buttons
const warriorbtn = () => {
    warriors.forEach((warrior) => {
        const btn = document.getElementById(`warrior-button-${warrior.id}`);
        if (btn) {
            btn.addEventListener("click", () => {
                getWarrior(warrior.id);
            });
        }
    });
};

const resetLocalStorage = () => {
    LocalStorageModule.DeleteAll();
};

// sets all events
const setEvents = () => {
    warriorbtn();
};

// Immediately invoke the start functions
(() => {
    showWarriors();
    setEvents();
    //resetLocalStorage();
})();
