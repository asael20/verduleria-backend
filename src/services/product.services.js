const { _badRequest,  _serverError, _okResponse} = require('../tools/message-response.tools')
const repository = require("../repository");


class ProductService {


    async findProductsByCategory(category) {

        if(!category) return _badRequest('category filter invalid')
        const res = await repository.products.selectProductsByCategory(category);
        return _okResponse(res.data);
    }


}


module.exports = ProductService;