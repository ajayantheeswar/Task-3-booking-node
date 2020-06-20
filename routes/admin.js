const express = require('express');
const router = express.Router();

const admin = require('../controllers/admin');

router.post('/getbuses',admin.getBusDetails);
router.post('/addbus',admin.createBus);
router.post('/getallbus',admin.getAllBus);

exports.router = router;