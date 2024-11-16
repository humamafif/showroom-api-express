const prisma = require('../db');

const findPayment = async () => {
    const payment = await prisma.paymentMethod.findMany();
    return payment;
}

const findPaymentById = async (id) => {
    const payment = await prisma.paymentMethod.findUnique({
        where: {
            id,
        }
    })
    return payment;
}

const findPaymentByType = async (type) => {
    const normalizedType = type.toUpperCase();
    const payment = await prisma.paymentMethod.findMany({
        where: {
            type: normalizedType
        }
    })
    return payment;
}


module.exports = {
    findPayment,
    findPaymentById,
    findPaymentByType
}