const router = require('express').Router();


router.use('/products', require('./product.routes'));
router.use('/purchase', require('./purchase.routes'))


module.exports = router;