const WarriorModule = (() => {
    const warriors = [
        {
            id: 101,
            name: "Penthesilea",
            health: 100,
            img: "warrior-1.jpg",
            price: 15,
        },
        {
            id: 102,
            name: "Goliath",
            health: 100,
            img: "warrior-2.jpg",
            price: 25,
        },
        {
            id: 103,
            name: "Eirik Bloodaxe",
            health: 100,
            img: "warrior-3.jpg",
            price: 15,
        },
        {
            id: 104,
            name: "Gunther",
            health: 100,
            img: "warrior-4.jpg",
            price: 5,
        },
        {
            id: 105,
            name: "Hercules",
            health: 100,
            img: "warrior-5.jpg",
            price: 20,
        },
        {
            id: 106,
            name: "Attila",
            health: 100,
            img: "warrior-6.jpg",
            price: 10,
        },
    ];

    const getAll = () => {
        return structuredClone(warriors);
    };

    return {
        getAll,
    };
})();

export default WarriorModule;
