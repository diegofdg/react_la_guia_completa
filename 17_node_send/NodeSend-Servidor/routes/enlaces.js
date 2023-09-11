const express = require('express');
const router = express.Router();
const enlacesController = require('../controllers/enlacesController');
const { check } = require('express-validator');
const auth = require('../middleware/auth');

router.post('/',
  auth,
  enlacesController.nuevoEnlace
);

module.exports = router;