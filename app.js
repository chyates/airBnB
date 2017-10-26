const express = require('express');
const path = require('path');
const session = require('express-session');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const PORT = 8000;

const app = express();

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '/frontend/dist')));
app.use(session({
    secret: 'secretsecretsecret!',
    resave: true,
    saveUninitialized: true
}));

require('./server/config/mongoose.js');

var routesSetter = require('./server/config/routes.js');
routesSetter(app);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})