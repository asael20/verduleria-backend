const ProductService = require('./product.services');
const PurchaseService = require('./purchase.services')

module.exports = {
    _productServ  : new ProductService(),
    _purchaseServ : new PurchaseService()
}