const express = require('express');
const asyncHandler = require('../middleware/asynchandler');
const { getAllCars, getCarById, createCar, deleteCarById, editCarById, getCarByBrand, getCarByName } = require('./car.services');
const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
  const cars = await getAllCars();
  res.status(200).json({ data: cars });
}));

router.get('/:id', asyncHandler(async (req, res) => {
  const carId = parseInt(req.params.id);
  const car = await getCarById(carId);
  res.status(200).json({ data: car });
}));


router.get('/brand/:brand', asyncHandler(async (req, res) => {
  const carBrand = req.params.brand;
  const car = await getCarByBrand(carBrand);
  res.status(200).json({ data: car });
}));

router.get('/name/:name', asyncHandler(async (req, res) => {
  const carName = req.params.name;
  const car = await getCarByName(carName);
  res.status(200).json({ data: car });
}))

router.post('/', asyncHandler(async (req, res) => {
  const newCarData = req.body;
  const car = await createCar(newCarData);
  res.status(201).json({
    message: "Car created successfully",
    data: car,
  });
}));

router.patch("/:id", asyncHandler(async (req, res) => {
  const carId = req.params.id;
  const carData = req.body;
  const car = await editCarById(parseInt(carId), carData);
  res.status(200).json({
    data: car,
    message: "Car updated successfully",
  });
}));

router.put('/:id', asyncHandler(async (req, res) => {
  const carId = req.params.id;
  const carData = req.body;

  if (!(carData.name && carData.brand && carData.fuel_type && carData.cabin_size && carData.price && carData.image_url)) {
    return res.status(400).json({ error: true, message: "Some fields are missing" });
  }

  const car = await editCarById(parseInt(carId), carData);
  res.status(200).json({
    data: car,
    message: "Car updated successfully",
  });
}));

router.delete('/:id', asyncHandler(async (req, res) => {
  const carId = req.params.id;
  await deleteCarById(parseInt(carId));
  res.status(200).json({ message: "Car deleted successfully" });
}));

module.exports = router;