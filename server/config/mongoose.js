var mongoose = require('mongoose');
var fs = require('fs');
var path = require('path');

// **CHANGE THE FOLLOWING LINE BASED ON PROJECT
mongoose.connect('mongodb://localhost/airbnb');
var models_path = path.join(__dirname, './../models');
fs.readdirSync(models_path).forEach(function (file) {
    if (file.indexOf('.js') >= 0) {
        require(models_path + '/' + file);
    }
});