var express = require('express');
var router = express.Router();
require("dotenv").config()
let User = require("../modules/database/mongoose/models/user")
//var axios = require("axios")

/* GET home page. */
router.get('/',  async function(req, res, next) {



  let jacob = await User.CreateUser('Jzzacob')
  console.log(jacob)


  res.render('index', { title: 'Cadocuir' });


});

module.exports = router;
