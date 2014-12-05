// set up =================================================
var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var passport = require('passport');
var flash = require('connect-flash');

var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
module.exports = {
// set the static files location (ex: /public/img will be /img for users)
app.use(express.static(__dirname + '/client'));
}
// return route config function
module.exports = function (app, passport, express) {

	var router = "Trial Router";


	return router;

}