var express = require('express');
var router = express.Router();
require("dotenv").config()
let User = require("../modules/database/mongoose/models/user")
//var axios = require("axios")

/* GET home page. */
router.get('/',  async function(req, res, next) {




  //Search in db corresponding user
  let user = await User.FindUserById('63022c757b6ecc95bc9c1c9a');


  console.log(User)







  res.render('index', { title: 'Cadocuir' });


});

module.exports = router;
