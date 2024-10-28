const express = require('express')

const stockController = require('../controlers/stockControler')
const router = express.Router();

router.get('/stocks',stockController.listStocks);
router.post('/stock', stockController.addStock);

module.exports = router;