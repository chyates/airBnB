const mongoose = require('mongoose');
const User = mongoose.model('User');
const bcrypt = require('bcrypt');
const session = require('express-session');

mongoose.Promise = global.Promise;

module.exports = {
    register: (req, res, next) => {
        let u = new User(req.body);
        u.messages = [];
        u.reservations = [];
        u.listings = [];
        u.reviews = [];
        u.userLevel = false;
        u.save()
            .then((user) => {
                req.session.user = user
                res.json(true);
            })
            .catch((err) => { res.status(409).json(err) });
// =================================================================
    },
    login: (req, res, next) => {
        User.findOne({ email: req.body.email.toLowerCase() })
            .then((user) => {
                if (!user) {
                    err = { error: "No user registered with that email" };
                    res.status(401).json(err);
                }
                else if (!bcrypt.compareSync(req.body.password, user.password)) {
                    res.status(402).json({ error: "Password is incorrect" });
                }
                else {
                    req.session.user = user;
                    res.json(true);
                }
            })
            .catch((err) => { res.status(409).json(err); });
// =================================================================
            
    },
    logout: (req, res, next) => {
        req.session.destroy();
        res.json(true);
// =================================================================

            
    },
    current: (req, res, next) => {
        if (req.session.user) {
            let currentUser = req.session.user
            res.json(curr);
        }
        else {
            res.status(400).json({ 'error': 'Captain!! An unregistered user is trying to board the ship!' });
        }
    }
}