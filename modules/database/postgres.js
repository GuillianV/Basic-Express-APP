require("dotenv").config()

//-------------Connexion a la base de données
const { Pool, Client } = require('pg');
var connectionString = 'postgresql://' + gitignore.user + ':' + gitignore.password + '@' + gitignore.host + ':' + gitignore.ports + '/' + gitignore.dbName
var client = new Client({
    connectionString,
})
client.connect()

exports.client = client