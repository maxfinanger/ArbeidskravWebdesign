import WarriorModule from "./modules/WarriorModule.js";
import LocalStorageModule from "./modules/LocalStorageModule.js";
import EquipmentModule from "./modules/EquipmentModule.js"; // Import EquipmentModule

const warriorDiv = document.getElementById("warrior-div");
const warriors = WarriorModule.getAll();
const equipments = EquipmentModule.getAll(); // Get all equipment

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

    return allWarriorsHTML;
};

const showEquipment = () => {
    let allEquipmentHTML = "";

    equipments.forEach((equipment) => {
        const equipmentHTML = `
        <article class="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
            <div class="shadow border border-rounded p-1 card h-100 d-flex flex-column justify-content-end">
                <div class="card-content mb-auto">
                    <img src="images/${equipment.image}" alt="${equipment.name}" class="card-img-top">
                    <h2>${equipment.name}</h2>
                    <p>Wood: ${equipment.wood}</p>
                    <p>Metal: ${equipment.metal}</p>
                </div>
                <button class="mt-auto btn bg-danger text-white hover " id="equipment-button-${equipment.id}">Buy for ${equipment.wood} wood and ${equipment.metal} metal</button>
            </div>
        </article>
        `;

        allEquipmentHTML += equipmentHTML;
    });

    return allEquipmentHTML;
};

// gets a warrior by id and adds it to the army
const getWarrior = (id) => {
    const warriors = WarriorModule.getAll();
    const warrior = warriors.find((warrior) => warrior.id === id);
    console.log(warrior);

    // Check if the player can afford the warrior
    if (!canAffordWarrior(warrior.price)) {
        notify("You don't have enough gold to buy this warrior.");
        return;
    }

    // Deduct gold
    payForWarrior(warrior.price);

    // Add the warrior to the army
    const army = LocalStorageModule.GetArmy();
    army.push(warrior);
    LocalStorageModule.SaveArmy(army);
    console.log(LocalStorageModule.GetArmy());
};

const payForWarrior = (goldPrice) => {
    const resources = LocalStorageModule.GetResources();
    resources.gold -= goldPrice;
    LocalStorageModule.SaveResources(
        resources.gold,
        resources.wood,
        resources.metal
    );
};

const canAffordWarrior = (goldPrice) => {
    const { gold } = LocalStorageModule.GetResources();
    return gold >= goldPrice;
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
// Gets equipment by id and adds it to the inventory (or any other suitable place)
const getEquipment = (id) => {
    const equipment = equipments.find((equip) => equip.id === id);
    console.log(equipment);

    // Check if the player can afford the equipment
    if (!canAffordEquipment(equipment.wood, equipment.metal)) {
        console.log("You don't have enough resources to buy this equipment.");
        return;
    }

    // Deduct resources
    payForEquipment(equipment.wood, equipment.metal);

    // Add the equipment to the inventory
    const inventory = LocalStorageModule.GetInventory(); // Assuming there's a GetInventory method
    inventory.push(equipment);
    LocalStorageModule.SaveInventory(inventory); // Assuming there's a SaveInventory method
    console.log(LocalStorageModule.GetInventory());
};

const payForEquipment = (woodCost, metalCost) => {
    const resources = LocalStorageModule.GetResources();
    resources.wood -= woodCost;
    resources.metal -= metalCost;
    LocalStorageModule.SaveResources(
        resources.gold,
        resources.wood,
        resources.metal
    ); // Assuming the SaveResources method accepts all three resources
};

const canAffordEquipment = (woodCost, metalCost) => {
    const { wood, metal } = LocalStorageModule.GetResources();
    return wood >= woodCost && metal >= metalCost;
};

// Adds event listeners to all equipment buttons
const equipmentBtn = () => {
    equipments.forEach((equipment) => {
        const btn = document.getElementById(`equipment-button-${equipment.id}`);
        if (btn) {
            btn.addEventListener("click", () => {
                getEquipment(equipment.id);
            });
        }
    });
};

const notify = (message) => {
    const toastElement = document.querySelector(".toast .toast-body");
    toastElement.textContent = message;
    const toast = new bootstrap.Toast(document.querySelector(".toast"));
    toast.show();
};

// sets all events
const setEvents = () => {
    warriorbtn();
    equipmentBtn(); // Add this to set the event listeners for equipment
};

// Immediately invoke the start functions
(() => {
    const content = showWarriors() + showEquipment();
    warriorDiv.innerHTML = content;
    setEvents();
})();
