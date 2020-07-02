const express = require('express');
const router = express.Router();

const admin = require('../controllers/admin');

router.post('/getbuses',admin.getBusDetails);
router.post('/addbus',admin.createBus);
router.post('/getallbus',admin.getAllBus);
router.post('/getTripsbybus',admin.getAllTripsByBusno);
router.post('/sendAlert',admin.sendAlerts);


exports.router = router;