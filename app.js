const express = require("express")
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.json());

const stockRouter = require('./routers/stocks')

app.use(stockRouter);

app.get('/', (req, res)=>{console.log('404');res.status(404).json({pagenotfound:'404'})});



app.listen(8080);
