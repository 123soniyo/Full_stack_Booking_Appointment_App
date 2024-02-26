const express = require('express');
const router = express.Router();
const path = require('path');

const userController=require('../controller/user');

// Middleware for parsing JSON and URL-encoded request bodies
router.use(express.json());
router.use(express.urlencoded({ extended: true }));



router.get('/appointment', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'appointments.html'));
    
});

router.post('/appointment-data', (req, res, next) => {
    console.log(req.body);
    // Process the appointment data as needed
    res.send('Appointment data received successfully.');
});

module.exports = router;
