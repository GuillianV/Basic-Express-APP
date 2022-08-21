var express = require('express');
var router = express.Router();
require("dotenv").config()
//var axios = require("axios")

var client = require("../modules/database/mongodbInit")


/* GET home page. */
router.get('/',  async function(req, res, next) {


  try {
    // Connect to the MongoDB cluster
    await client.connect();

    // Make the appropriate DB calls
    console.log(client)


    const db = client.db(process.env.DB_NAME);

    const collections = await db.collections();
    collections.forEach (c=>console.log(c.collectionName));

  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }



  res.render('index', { title: 'Cadocuir' });


});

module.exports = router;
