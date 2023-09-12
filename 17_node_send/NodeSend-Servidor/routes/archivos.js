const express = require('express');
const router = express.Router();
const archivosController = require('../controllers/archivosController');
const auth = require('../middleware/auth');

router.post('/',
  archivosController.subirArchivo
);

router.delete('/:id',
  archivosController.eliminarArchivo,
);

module.exports = router;