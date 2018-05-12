var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var utilisateurRouter = require('./routes/utilisateur');
var projetRouter = require('./routes/projet');
var devisRouter = require('./routes/devis');
var gammeRouter = require('./routes/gamme');
var documentRouter = require('./routes/document');
var moduleRouter = require('./routes/module');
var composantRouter = require('./routes/composant');
var clientRouter = require('./routes/client');

var app = express();

// Allow access control origin
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost');

    // Request methods you wish to allow
    //res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/utilisateur', utilisateurRouter);
app.use('/projet', projetRouter);
app.use('/devis', devisRouter);
app.use('/document', documentRouter);
app.use('/module', moduleRouter);
app.use('/composant', composantRouter);
app.use('/gamme', gammeRouter);
app.use('/client', clientRouter);


module.exports = app;
