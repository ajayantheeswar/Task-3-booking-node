const express = require('express');

const authController = require('../controllers/auth');

const router = express.Router();

// /admin/add-product => GET
router.post('/createAdmin',authController.createAdmin);

router.post('/authAdmin',authController.authAdmin);

router.post('/createCustomer',authController.createCustomer);

router.post('/authCustomer',authController.authCustomer);

module.exports = router;
