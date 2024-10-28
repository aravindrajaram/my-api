exports.listStocks = (req, res, next) => {
    console.log('here...');
    res.status(200).json({ stocklist: [{ stockname: 'APPLE', open: 135, close: 140 }, { stockname: 'GOOGLE', open: 35, close: 30 }] });
};