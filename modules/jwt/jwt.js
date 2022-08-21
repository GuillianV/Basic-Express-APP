var jsonwebtoken = require('jsonwebtoken')
require("dotenv").config()

function generateAccessToken(user){
    return jsonwebtoken.sign(user.toJSON(),process.env.JWT_ACCESS_TOKEN_SECRET,{
        expiresIn : '3600s'
    })
}

// /me
function authenticateToken(req, res, next) {
    let token = null


    console.log(req.cookies)
    if (typeof req.cookies.jwt !== 'undefined'){
        token = req.cookies.jwt;
    }

    if (!token) {
        return res.sendStatus(401);
    }

    jsonwebtoken.verify(token, process.env.JWT_ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) {
            console.log(err)
            return res.sendStatus(401);
        }
        req.user = user;
        next();
    });
}

module.exports = {
    generateAccessToken,
    authenticateToken
}