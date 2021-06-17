const ProductRepository = require('./product.repo');


const repository = {
    products: new ProductRepository()
}



module.exports = repository;