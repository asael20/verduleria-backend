const purchaseRouter = require('express').Router();
const {_purchaseServ} = require('../services')

purchaseRouter.post('/', async (req, res, next) => {
    
    const result = await _purchaseServ.registerPurchase(req.body);
    res.status(result.cod).json(result);
});



module.exports = purchaseRouter;