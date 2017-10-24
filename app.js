const express = require('express');
const path = require('path');
const session = require('express-session');
const PORT = 8000;

const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '/frontend/dist')));
app.use(session({ secret: 'secretsecretsecret!',  resave: true,
saveUninitialized: true }));

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})