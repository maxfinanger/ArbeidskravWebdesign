import LocalStorageModule from "./modules/LocalStorageModule";
import WarriorModule from "./Modules/WarriorModule";

//const outputArmySection = document.querySelector("#output-section");

const yourArmy = JSON.parse(localStorage.getItem("army"));

const outputArmySection = document.getElementById("#output-section");
