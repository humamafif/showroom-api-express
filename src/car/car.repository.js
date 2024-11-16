const prisma = require('../db');

const findCar = async () => {
    const car = await prisma.car.findMany()
    return car;
}

const findCarById = async (id) => {
    const car = await prisma.car.findUnique({
        where: {
            id,
        }  
    })
    return car;
}

const findCarByBrand = async (brand) => {
    const car = await prisma.car.findMany({
        where: {
            brand: {
                contains: brand,
            }
        }
    })
    return car;
}

const findCarByName = async (name) => {
    const car = await prisma.car.findMany({
        where: {
            name: {
                startsWith: name,
            }
        }
    });
    return car;
}

const insertCarData = async (newCarData) => {
    const car = await prisma.car.create({
        data: {
            name: newCarData.name,
            brand: newCarData.brand,
            cabin_size: newCarData.cabin_size,
            fuel_type: newCarData.fuel_type,
            price: newCarData.price,
            image_url: newCarData.image_url,
        }
    });
    return car;
}

const deleteCar = async (id) => {
    await prisma.car.delete({
        where: { id }
    })
}

const editCar = async (id, carData) => {
    const car = await prisma.car.update({
        where: {
            id: id,
        },
        data: {
            name: carData.name,
            brand: carData.brand,
            cabin_size: carData.cabin_size,
            fuel_type: carData.fuel_type,
            price: carData.price,
            image_url: carData.image_url,
        }
    });
    return car;
}
module.exports = {
    findCar,
    findCarById,
    insertCarData,
    deleteCar,
    editCar,
    findCarByBrand,
    findCarByName,
}