const LocalStorageModule = (() => {
    const SaveArmy = (army) => {
        for (let warrior of army) {
            const id = warrior.id;

            const newWarrior = {
                id: id,
                name: warrior.name,
                health: warrior.health,
                img: warrior.img,
            };

            const json = JSON.stringify(newWarrior);
            localStorage.setItem(`${id}`, json);
        }
    };

    const GetArmy = () => {
        const army = [];

        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            const json = localStorage.getItem(key);
            const warrior = JSON.parse(json);
            army.push(warrior);
        }

        return army;
    };

    const DeleteWarrior = (id) => {
        localStorage.removeItem(id);
    };

    return {
        SaveArmy,
        GetArmy,
        DeleteWarrior,
    };
})();

export default LocalStorageModule;
