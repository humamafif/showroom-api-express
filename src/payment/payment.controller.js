const express = require('express');
const asyncHandler = require('../middleware/asynchandler');

const { getAllPayments, getPaymentById, getPaymentByType } = require('./payment.services');

const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
    const payments = await getAllPayments();
    res.status(200).json({ data: payments });
}));

router.get('/:id', asyncHandler(async (req, res) => {
    const paymentId = parseInt(req.params.id);
    const payment = await getPaymentById(paymentId);
    res.status(200).json({ data: payment });
}));

router.get('/type/:type', asyncHandler(async (req, res) => {
    const paymentType = req.params.id;
    const payment = await getPaymentByType(paymentType);
    res.status(200).json({ data: payment });
}));
module.exports = router;