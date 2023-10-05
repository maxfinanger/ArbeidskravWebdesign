const EquipmentModule = (function () {
    const equipment = [
        {
            id: 201,
            name: "Horse",
            wood: 10,
            metal: 5,
            image: "horse.png",
        },
        {
            id: 202,
            name: "Elephant",
            wood: 15,
            metal: 10,
            image: "elephant.png",
        },
        {
            id: 203,
            name: "Catapult",
            wood: 20,
            metal: 40,
            image: "catapult.png",
        },
        {
            id: 204,
            name: "Cannon",
            wood: 30,
            metal: 50,
            image: "cannon.png",
        },
    ];
    const getAll = () => {
        return structuredClone(equipment);
    };

    return {
        getAll,
    };
})();

export default EquipmentModule;
