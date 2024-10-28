const express = require('express')

const stockController = require('../controlers/stockControler')
const router = express.Router();

console.log('routers...');
router.get('/stocks',stockController.listStocks);
module.exports = router;