const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

mongoose.connect('mongodb://localhost/airbnb', {useMongoClient: true});

mongoose.connect('mongodb://localhost/airbnb');
const models_path = path.join(__dirname, '../models');

fs.readdirSync(models_path).forEach(function (file) {
    if (file.indexOf('.js') >= 0) {
        require(models_path + '/' + file);
    }
});