const express = require('express')

const stockController = require('../controlers/stockControler')
const router = express.Router();

// middleware that is specific to this router
const timeLog = (req, res, next) => {
    console.log('Time: ', Date.now())
    next()
  }
  router.use(timeLog)

router
    .get('/stocks', stockController.listStocks)
    .post('/stock', stockController.addStock)
    .get('/stocks/:stockname', stockController.getStock)
    .get('/stocks/:stockname/history', stockController.geStockHistory)
module.exports = router;