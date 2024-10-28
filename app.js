const express = require("express")
const app = express();
const stockRouter = require('./routers/stocks')

app.use('/list', stockRouter);

app.get('/', (req, res)=>{console.log('404');res.status(404).json({pagenotfound:'404'})})

app.listen(8080);