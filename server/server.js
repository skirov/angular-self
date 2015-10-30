var express         = require('express');
var app             = express();
var mongoose        = require('mongoose');
var morgan          = require('morgan');
var bodyParser      = require('body-parser');
var methodOverride  = require('method-override');

//listen port
var _port = 8080;

//Database
mongoose.connect('mongodb://kirov:kirov@ds039484.mongolab.com:39484/angular-app');

//Configuration
app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(methodOverride());

//routes
require('./lib/routes/todo').init(app);

app.listen(_port);
console.log('App started on port ' + _port);