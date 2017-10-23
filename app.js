var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');
var session = require('express-session');

var app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './frontEnd/dist')));
app.use(session({
    secret: 'b039eb9d81a90a24fb522fe622d6a06c',
    resave: false,
    saveUninitialized: true
}))

app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');

require('./server/config/mongoose.js');

var routesSetter = require('./server/config/routes.js');
routesSetter(app);

app.listen(8000, function() {
    console.log("listening on port 8000");
})