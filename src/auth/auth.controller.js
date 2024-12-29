const express = require('express');
const asyncHandler = require('../middleware/asynchandler');
const router = express.Router();
const authService = require('./auth.service');

router.get('/', asyncHandler(async (req, res) => {
    const user = await authService.getUsers();
    res.status(200).json({ data: user });
}));

router.get('/:id', asyncHandler(async (req, res) => {
    const userId = parseInt(req.params.id);
    const user = await authService.getUserById(userId);
    res.status(200).json({ data: user });
}));

router.post('/login', asyncHandler(async (req, res) => {
    const { username, password } = req.body;
    const user = await authService.loginUser(username, password);
    res.status(200).json({ message: "user login", data: user });
}));

router.post('/register', asyncHandler(async (req, res) => {
    const user = await authService.registerUser(req.body);
    res.status(201).json({ message: "user created", data: user });
}));

router.put('/:id', asyncHandler(async (req, res) => {
    const userId = parseInt(req.params.id);
    const user = await authService.updateUser(userId, req.body);
    res.status(200).json({ message: "user updated", data: user });
}));

router.delete('/:id', asyncHandler(async (req, res) => {
    const userId = parseInt(req.params.id);
    await authService.deleteUser(userId);
    res.status(200).json({ message: "user deleted" });
}));

module.exports = router;