const express = require('express');

const CustomerController = require('../controllers/customer');

const router = express.Router();

router.post('/bookbus',CustomerController.bookBus);

router.post('/gettrip',CustomerController.getTrip);

router.post('/getbus',CustomerController.getBusBySrcAndDes);

router.post('/gettickets',CustomerController.getTickets);

router.post('/cancelticket',CustomerController.deleteTicket);

router.post('/getmessages',CustomerController.getTripChats);

exports.router = router;

