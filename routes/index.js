var express = require('express');
var router = express.Router();
var axios = require("axios")

/* GET home page. */
router.get('/', function(req, res, next) {

  let jwt = ""
  axios.post(process.env.DBHOST + 'auth/local', {
    identifier: "admin",
    password: "admin123",
  }).then(response => {
    jwt = response.data.jwt
  }).catch(error => {
    console.log(error)
  }).finally(()=>{
    res.render('index', { title: 'Cadocuir', jwt:jwt });
  });

});

module.exports = router;
