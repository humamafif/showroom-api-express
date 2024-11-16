const {findPayment, findPaymentById, findPaymentByType} = require('./payment.repository');

const getAllPayments = async () => {    
    const payment = await findPayment();
    return payment;
}

const getPaymentById = async (id) => {
    if (typeof id !== "number" || isNaN(id)) {
        throw Error("Invalid ID");
    }
    const payment = await findPaymentById(id);
    if (!payment) {
        throw Error("Payment not found");
    }
    return payment;
}

const getPaymentByType = async (type) =>{
    const payment = await findPaymentByType(type);
    if (payment.length === 0) {
        throw Error("Type not found");
    }
    return payment;
}


module.exports = {
    getAllPayments,
    getPaymentById,
    getPaymentByType
}