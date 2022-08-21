var createError = require('http-errors');
var express = require('express');
var path = require('path');
var fs = require('fs')
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser');

//multer permet d'enregitrer des fichiers tels que des photos ou autres documents
var multer = require('multer');
var logger = require('morgan');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//Log des requettes utilisateur
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Permet d'obtenir le coockies utilisateur (req.cookies)
app.use(cookieParser());

//Chemin static d'acces aux fichiers
app.use(express.static(path.join(__dirname, 'public')));

//Acces au body de la requette (req.body)
app.use(bodyParser.urlencoded({ extended: true }))
app.enable('trust proxy');



// Load Routes
let routesFolder = "./routes"
app.use(`/`, require(`${routesFolder}/index`));
fs.readdirSync( path.join(__dirname,"/routes"))?.forEach(file =>{

  if (!file.includes("index")){
    console.log(`/${file.replace(".js","")}`)
    console.log(`${routesFolder}/${file.replace(".js","")}`)

    app.use(`/${file.replace(".js","")}`, require(`${routesFolder}/${file.replace(".js","")}`));
  }
});




// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
