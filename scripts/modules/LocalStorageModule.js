const LocalStorageModule = (() => {
    const SaveArmy = (army) => {
        if (!Array.isArray(army)) {
            console.error("Error: Trying to save non-array data as army.");
            return;
        }
        const json = JSON.stringify(army);
        localStorage.setItem("army", json);
    };

    // Gets the army from local storage and returns it as an array
    const GetArmy = () => {
        const data = localStorage.getItem("army");
        return data ? JSON.parse(data) : [];
    };

    const addWarriorToArmy = (newWarrior) => {
        // Step 1: Fetch the existing army from local storage
        let currentArmy = LocalStorageModule.GetArmy();

        // Step 2: Add the new warrior to the fetched army array
        currentArmy.push(newWarrior);

        // Step 3: Save the modified army back to local storage
        LocalStorageModule.SaveArmy(currentArmy);
    };

    // Deletes a warrior from local storage by id, (this is not currently in use in the project)
    const DeleteWarrior = (id) => {
        localStorage.removeItem(id);
    };

    // Deletes all items from local storage
    const DeleteAll = () => {
        localStorage.clear();
    };

    const SaveResources = (gold, wood, metal) => {
        const resources = {
            gold: gold,
            wood: wood,
            metal: metal,
        };
        const resourcesJson = JSON.stringify(resources);
        localStorage.setItem("resources", resourcesJson);
    };

    const GetResources = () => {
        const json = localStorage.getItem("resources");
        if (json) {
            return JSON.parse(json);
        } else {
            return {
                gold: 0,
                wood: 0,
                metal: 0,
            };
        }
    };

    const SaveInventory = (inventory) => {
        const json = JSON.stringify(inventory);
        localStorage.setItem("inventory", json);
    };

    const GetInventory = () => {
        const json = localStorage.getItem("inventory");
        return json ? JSON.parse(json) : [];
    };

    return {
        SaveArmy,
        GetArmy,
        DeleteWarrior,
        DeleteAll,
        SaveResources,
        GetResources,
        SaveInventory,
        GetInventory,
        addWarriorToArmy,
    };
})();

export default LocalStorageModule;
