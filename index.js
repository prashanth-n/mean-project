var express = require('express');
var mongoose = require('mongoose');

var app = express();
var bodyParser = require('body-parser');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1/testApp');
//app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var routes = require('./app/routes/category.route.js')
routes(app)
app.listen(3000);
