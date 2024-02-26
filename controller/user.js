// controller/user.js

const express = require('express');
const router = express.Router();

// Import your controller functions
const userController = require('./user');

// Define routes using the router
// router.post('/users', userController.postUser);
// router.get('/users', userController.getUsers);
// router.delete('/users/:userId', userController.deleteUser);
// router.get('/users/:userId', userController.getUser);

module.exports = router;
