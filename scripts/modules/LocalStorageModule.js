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

    const SaveResources = (resources) => {
        const json = JSON.stringify(resources);
        localStorage.setItem("resources", json);
    };

    const GetResources = () => {
        const json = localStorage.getItem("resources");
        return json ? JSON.parse(json) : [];
    };

    return {
        SaveArmy,
        GetArmy,
        DeleteWarrior,
        DeleteAll,
        SaveResources,
        GetResources,
    };
})();

export default LocalStorageModule;
