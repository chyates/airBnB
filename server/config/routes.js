const path = require('path');
const users = require('../controllers/user_controller.js');

module.exports = (app) => {
    app.get('/logout', users.logout);
    app.get('/currentUser', users.current);
    app.post('/register', users.register);
    app.post('/login', users.login);

    app.all('*', (req, res, next) => {
        res.sendFile(path.resolve('./frontend/dist/index.html'));
    })
}