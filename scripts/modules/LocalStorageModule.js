const LocalStorageModule = (() => {
    const SaveArmy = (army) => {
        const json = JSON.stringify(army);
        localStorage.setItem("army", json);
    };

    // Gets the army from local storage and returns it as an array
    const GetArmy = () => {
        const json = localStorage.getItem("army");
        return json ? JSON.parse(json) : [];
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
    };
})();

export default LocalStorageModule;
