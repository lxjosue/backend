const express = require('express');
const router = express.Router();
const controllers = require('./controllers');

router.get('/api/consulta', controllers.consultarAPI);

module.exports = router;
