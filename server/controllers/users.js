const mongoose = require('mongoose');
const User = mongoose.model('User');
const bcrypt = require('bcrypt');
const session = require('express-session');

mongoose.Promise = global.Promise;

module.exports = {
    register: function(req, res) {
        console.log("Inside register function, body input is:", req.body);
        User.find({email: req.body.email}, function(error, user) {
            if (user.length >= 1) {
                res.json({
                    error: 'An account with that email already exists.  Please use a different email.',
                    loggedIn: false
                });
            } else {
                var newUser = new User({
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    email: req.body.email,
                    password: bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(8)),
                    userLevel: false,
                });
                newUser.reviews = [];
                newUser.listings = [];
                newUser.reservations = [];
                newUser.conversations = [];
                newUser.save(function(err, user) {
                    if (err) {
                        console.log("new user:", newUser);
                        console.log("Didn't find user and couldn't save");
                        res.json({error: err, loggedIn: false});
                    } else {
                        console.log("Made it to save");
                        req.session.user = newUser;
                        console.log(req.session.user);
                        res.json({user: newUser, loggedIn: true});
                    }
                });
            }
        });
    },

    login: function (req, res) {
        User.find({email: req.body.email}, function(err, user){
            if (err) {
                res.json(err);
            } else {
                if (user.length > 0) {
                    if (bcrypt.compareSync(req.body.password, user[0].password)) {
                        req.session.user = user[0];
                        res.json({user: user[0], loggedIn: true});
                    } else {
                        res.json({passwordError: 'Password is incorrect. Please try again', loggedIn: false});
                    }
                } else {
                    console.log("Couldn't find user", user);
                    res.json({emailError: 'Email not found, please register or try again',loggedIn: false});
                }
            }
        });
    },

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

// register: function (req, res) {
//     var newUser = new User({
//         firstName: req.body.firstName,
//         lastName: req.body.lastName,
//         email: req.body.email,
//         password: bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(8)),
//         userLevel: false,
//     });
//     newUser.reviews = [];
//     newUser.listings = [];
//     newUser.reservations = [];
//     newUser.conversations = [];
//     newUser.save(function(err, user) {
//         if (err) {
//             console.log(err);
//             console.log("new user:", newUser);
//             console.log("Didn't find user and couldn't save");
//             res.json({error: err, loggedIn: false});
//         } else {
//             console.log("Made it to save");
//             req.session.user = user;
//             console.log(req.session.user);
//             res.json({user: newUser, loggedIn: true});
//         }
//             });
//         },

    current: function(req, res){
        // console.log("In current user function:", req.session.user);
        if (req.session.user){
            var currentUser = req.session.user;
            res.json({user: currentUser});
        } else {
            res.json({error: "Could not find user", 'user': req.session.user});
        }
    }
}