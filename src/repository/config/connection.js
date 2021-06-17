const mysql = require('mysql2/promise');
const {MySQL_OPTIONS} = require('./db.options');



const succesfullyQuery = (data) => ({data, success:true, err:null});
const BadQuery = (err) => ({data:[], success:false, err});



async function _executeQuery ( query = '') {
    
    try {
        let conn = await mysql.createConnection(MySQL_OPTIONS);
    
        let {res, ok} = await conn.query(query)
                .then(val => ({ok:true, res:val[0]}))
                .catch(err => ({ok:false, res:err}));
        
        if(!ok) return BadQuery(res)

        return succesfullyQuery(res);

    }catch(err){
        return BadQuery(err);
    }
    
}



module.exports = {
    _executeQuery
};






