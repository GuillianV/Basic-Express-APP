var express = require('express');
var { authenticateToken, generateAccessToken} = require("../modules/jwt/jwt")
var router = express.Router();
require("dotenv").config()
let User = require("../modules/database/mongoose/models/user")
//var axios = require("axios")

/* GET home page. */
router.get('/',  async function(req, res, next) {



  let jwt = ""

  let jacob = await User.findOne({name:'Jzzacob'})
  if (jacob != null){

    jwt = generateAccessToken(jacob)
    authenticateToken(req,res,next)


  }


  res.render('index', { title: 'Cadocuir',jwt : jwt });


});

module.exports = router;
