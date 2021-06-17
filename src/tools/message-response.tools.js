
function _badRequest (mesage) {
    return {cod: 400, mesage, data:[]}
}

function _notFound (mesage) {
    return {cod: 404, mesage, data:[]}
}

function _okResponse (data, mesage=null) {
    return {cod: 200, mesage, data}
}

function _created (mesage, data=[]) {
    return {cod: 201, mesage, data}
}


function _serverError () {
    return {cod: 500, mesage: 'something went wrong into server', data:[]}
}



module.exports = {

    _badRequest,
    _okResponse,
    _serverError,
    _notFound,
    _created
}