require("dotenv").config()

//-------------Connexion a la base de données

var uri = `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/`
var mongodb = require('mongodb')
var client = new mongodb.MongoClient(uri)

module.exports = client;