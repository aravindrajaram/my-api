exports.listStocks = (req, res, next) => {
    console.log('GET /stocks');
    res.status(200).json({ stocklist: [{ stockname: 'APPLE', open: 135, close: 140 }, { stockname: 'GOOGLE', open: 35, close: 30 }] });
};

exports.addStock = (req, res, next) => {
    console.log('POST /stock ==>');
    console.log(req.body.stockname);
    res.status(201).json({message:'Stock created!'});
};