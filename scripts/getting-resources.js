import LocalStorageModule from "./modules/LocalStorageModule.js";

document.addEventListener("DOMContentLoaded", () => {
  // Function for updating resource values on the page
  const updateResourceCounts = () => {
    const { gold, wood, metal } = LocalStorageModule.GetResources();
    document.getElementById("metal-count").textContent = metal;
    document.getElementById("gold-count").textContent = gold;
    document.getElementById("wood-count").textContent = wood;
  };

  // Initialize resources from LocalStorageModule and update the counters
  updateResourceCounts();

  // Mine click event
  document.getElementById("mine-img").addEventListener("click", () => {
    const { gold, wood, metal } = LocalStorageModule.GetResources();
    const chance = Math.random();
    if (chance < 0.75) {
      LocalStorageModule.SaveResources(gold, wood, metal + 1);
    } else {
      LocalStorageModule.SaveResources(gold + 1, wood, metal);
    }
    updateResourceCounts();
  });

  // Woods click event
  document.getElementById("woods-img").addEventListener("click", () => {
    const { gold, wood, metal } = LocalStorageModule.GetResources();
    LocalStorageModule.SaveResources(gold, wood + 1, metal);
    updateResourceCounts();
  });
});
