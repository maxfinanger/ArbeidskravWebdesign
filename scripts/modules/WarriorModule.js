const WarriorModule = (() => {
    const warriors = [
        { id: 101, name: "Penthesilea", health: 100, img: "warrior1.jpg" },
        { id: 102, name: "Goliath", health: 100, img: "warrior2.jpg" },
        { id: 103, name: "Eirik Bloodaxe", health: 100, img: "warrior3.jpg" },
        { id: 104, name: "Gunther", health: 100, img: "warrior4.jpg" },
        { id: 105, name: "Hercules", health: 100, img: "warrior5.jpg" },
        { id: 106, name: "Attila", health: 100, img: "warrior6.jpg" },
    ];

    const getAll = () => {
        return structuredClone(warriors);
    };

    return {
        getAll,
    };
})();

export default WarriorModule;
