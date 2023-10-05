const EquipmentModule = (function () {
    const equipment = [
        {
            id: 201,
            name: "horse",
            wood: 10,
            metal: 5,
            image: "horse.png",
        },
        {
            id: 202,
            name: "elephant",
            wood: 15,
            metal: 10,
            image: "elephant.png",
        },
        {
            id: 203,
            name: "catapult",
            wood: 20,
            metal: 40,
            image: "catapult.png",
        },
        {
            id: 204,
            name: "cannon",
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
