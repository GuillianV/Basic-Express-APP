require("dotenv").config()
const mongoose = require('mongoose');

//-------------Connexion a la base de données

var uri = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`
main().catch(err => console.log(err));

async function main() {
    await mongoose.connect(uri);
}

module.exports = mongoose;