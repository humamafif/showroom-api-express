const { findCarById, insertCarData, editCar, deleteCar, findCarByBrand, findCar, findCarByName } = require("./car.repository");

const getAllCars = async () => {
    const car = await findCar();
    return car;
}

const getCarById = async (id) => {
    if (typeof id !== "number" || isNaN(id)) {
        throw Error("Invalid ID");
    }
    const car = await findCarById(id);
    if (!car) {
        throw Error("Car not found");
    }
    return car;
}

const createCar = async (newCarData) => {
    const car = await insertCarData(newCarData);
    return car;
}

const deleteCarById = async (id) => {
    await getCarById(id);
    await deleteCar(id);
}

const editCarById = async (id, carData) => {
    await getCarById(id);
    const car = await editCar(id, carData);
    return car;
}

const getCarByBrand = async (brand) => {
    const car = await findCarByBrand(brand);
    if (car.length === 0) {
        throw Error("Brand not found");
    }
    return car;
}

const getCarByName = async (name) => {
    const car = await findCarByName(name);
    if (car.length === 0) {
        throw new Error("Car not found");
    }
    return car;
}
// const putCarById = async (id, carData) => {
//     const car = await patchCarById(id, carData);
//     return car;
// }

module.exports = {
    getAllCars,
    getCarById,
    createCar,
    deleteCarById,
    editCarById,
    getCarByBrand,
    getCarByName,
}