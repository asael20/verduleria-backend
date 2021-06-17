const { _badRequest,  _notFound, _created} = require('../tools/message-response.tools')
const _repository = require("../repository");


class PurchaseService {


    async registerPurchase ({payerId, payerCard, dateCard, typeCard, productId}) {

        const {data} = await _repository.products.selectProduct(productId);
        
        if(data.length == 0){
            return _notFound('product not found');
        }
        
        const product = data[0];
        if(product.stock == 0) return _badRequest('this product does not have a sufficient stock for be bought');

        let newStock = product.stock - 1;
        await _repository.products.updateStock(productId, newStock);

        return _created('product have been bought successfully');
    }


}


module.exports = PurchaseService;