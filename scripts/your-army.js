import LocalStorageModule from "./modules/LocalStorageModule";
import WarriorModule from "./Modules/WarriorModule";

//const outputArmySection = document.querySelector("#output-section");

const yourArmy = JSON.parse(localStorage.getItem("army"));

const outputArmySection = document.getElementById("#output-section");

const showWarriors = () => {
  let allWarriorsHTML = "";

  yourArmy.forEach((warrior) => {
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

(() => {
  showWarriors();
})();
