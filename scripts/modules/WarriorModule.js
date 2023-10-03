const WarriorModule = (() => {
    const warriors = [
        {
            id: 101,
            name: "Penthesilea",
            health: 100,
            img: "warrior-1.jpg",
            price: 150,
        },
        {
            id: 102,
            name: "Goliath",
            health: 100,
            img: "warrior-2.jpg",
            price: 250,
        },
        {
            id: 103,
            name: "Eirik Bloodaxe",
            health: 100,
            img: "warrior-3.jpg",
            price: 150,
        },
        {
            id: 104,
            name: "Gunther",
            health: 100,
            img: "warrior-4.jpg",
            price: 50,
        },
        {
            id: 105,
            name: "Hercules",
            health: 100,
            img: "warrior-5.jpg",
            price: 200,
        },
        {
            id: 106,
            name: "Attila",
            health: 100,
            img: "warrior-6.jpg",
            price: 100,
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
