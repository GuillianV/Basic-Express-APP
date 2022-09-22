require('../../server.js')


module.exports = function (app, express, vhost, PrepareBasicRoutes) {

    require('dotenv').config({path:__dirname+'/.env'})

    const cdn = [
        'www.mydomain.fr',
        'mydomain.fr',
    ]


    let myApp = require("./app.js")
    app.use(vhost(cdn, flemeApp))

    let cert = {
        key: 'key.pem',
        cert: 'cert.pem'
    }
    
    return [cdn, cert]

};