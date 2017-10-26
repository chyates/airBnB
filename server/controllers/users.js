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
    },

    login: function (req, res) {
        User.find({email: req.body.email}, function(err, user){
            if (err) {
                res.json(err);
            } else {
                if (user.length > 0) {
                    if (bcrypt.compareSync(req.body.password, user[0].password)) {
                        req.session.user = user[0];
                        console.log(req.session.user);
                        res.json({user: user[0], loggedIn: true});
                    } else {
                        res.json({error: 'Password is incorrect. Please try again', loggedIn: false});
                    }
                } else {
                    res.json({error: 'Email not found, please register or try again',loggedIn: false});
                }
            }
        });
    },

    // login: function(req, res) {
    //     User.find({email: req.body.email}, function (err, user) {
    //         if (err) {
    //             res.json({error: err});
    //         } else {
    //             if (user.length > 0) {
    //                 if (bcrypt.compareSync(req.body.password, user[0].password)) {
    //                     req.session.currentUser = user[0];
    //                     res.json({user: user, loggedIn: true});
    //                 } else {
    //                     res.json({error: 'Password is incorrect.', loggedIn: false});
    //                 }
    //             } else {
    //                 res.json({error: 'Email not found. Please try again or register to continue.', loggedIn: false})
    //             }
    //         }
    //     });
    // },

    logout: (req, res, next) => {
        req.session.destroy();
        res.json(true);
    },

    update: function (req, res) {
        User.findById(req.params.id, function (err, user) {
            if (err) {
                console.log('user update function: could not find user');
            } else {
                user.firstName = req.body.firstName;
                user.lastName = req.body.lastName;
                user.email = req.body.email;
                user.phoneNum = req.body.phoneNum;
                user.save(function (err, user) {
                    if (err) {
                        res.json({ error: "Update attempt unsuccessful." });
                    } else {
                        res.json({ user: user });
                    }
                })
            }
        });
    },

    regHost: function (req, res) {
        User.findById(req.params.id, function (err, user) {
            if (err) {
                console.log(err);
            } else {
                user.userLevel = true;
                user.save(function (err, user) {
                    if (err) {
                        res.json({ error: 'Unable to register as host. Please try again.' });
                    } else {
                        res.json({ user: user });
                    }
                })
            }
        });
    },

    current: function(req, res){
        if (req.session.user){
            let currentUser = req.session.user;
            res.json({user: currentUser});
        } else {
            res.json({});
        }
    }
}