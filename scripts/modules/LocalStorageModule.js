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

    return {
        SaveArmy,
        GetArmy,
        DeleteWarrior,
        DeleteAll,
    };
})();

export default LocalStorageModule;
