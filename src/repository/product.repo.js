const { _executeQuery } = require("./config/connection");


class ProductRepository {


    async selectProductsByCategory(cantegory) {
        const sqlStr = `SELECT * FROM products WHERE category = '${cantegory}'`;
        const result = await _executeQuery(sqlStr);

        return result;
    }

    async selectProduct(productId) {
        const sqlStr = `SELECT * FROM products WHERE id = ${productId}`;
        const result = await _executeQuery(sqlStr);

        return result;
    }

    async updateStock (productId, stock) {
        const sqlStr = `UPDATE products SET stock = ${stock} WHERE id = ${productId}`;
        const result = await _executeQuery(sqlStr);
    
        return result;
    }

}

module.exports = ProductRepository;