exports.listStocks = (req, res, next) => {
    console.log('GET /stocks');
    //TODO: Retrieve all stock names from MySQL DB.
    res.status(200)
        .json({
            stocklist: [{ stockname: 'APPLE' },
            { stockname: 'GOOGLE' }]
        });
};

exports.addStock = (req, res, next) => {
    console.log('POST /stock');
    console.log(req.body.stockname);
    //TODO: Add new stock name to MySQL DB.
    res.status(201)
        .json({ message: 'Stock created!' });
};

exports.getStock = (req, res, next) => {
    console.log('GET /stocks/:stockname')
    console.log('Retrieving [' + req.params.stockname + ']');
    //TODO: Retrieve the current date stock info for given stock name from MySQL DB.
    res.status(200)
        .json({ stockname: req.params.stockname, open: 33, close: 43 });
};
exports.geStockHistory = (req, res, next) => {
    console.log('GET /stocks/:stockname/history')
    console.log('Retrieving [' + req.params.stockname + ']');

    //TODO: Retrieve data from MySQL DB
    res.status(200)
        .json({
            stockname: req.params.stockname,
            history: [{ date: '2024-10-01', open: 20, close: 22 },
            { date: '2024-10-02', open: 20, close: 22 },
            { date: '2024-10-03', open: 20, close: 22 },
            { date: '2024-10-04', open: 20, close: 22 },
            { date: '2024-10-05', open: 20, close: 22 },
            { date: '2024-10-06', open: 20, close: 22 },
            { date: '2024-10-07', open: 20, close: 22 }]
        });

};