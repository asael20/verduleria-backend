const productRouter = require('express').Router();
const { _productServ } = require('../services')


productRouter.get('/', async (req, res, next) => {
    const {category} = req.query;
    const result = await _productServ.findProductsByCategory(category);

    res.status(result.cod).json(result);
});



module.exports = productRouter;