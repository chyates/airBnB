var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var User = mongoose.model('User');

module.exports = {
    register: function(req, res) {
        // register as guest as default, becomes true when user is host
        var newUser = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            phoneNum: req.body.phoneNum,
            password: bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(8)),
            userLevel: false
        });
        newUser.messages = [];
        newUser.reservations = [];
        newUser.listings = [];
        newUser.reviews = [];
        newUser.save(function (err, user) {
            if (err){
                res.json({error: err, loggedIn: false});
            } else {
                req.session.currentUser = user;
                res.json({user: user, loggedIn: true});
            }
        });
    },

    login: function(req, res) {
        User.find({email: req.body.email}, function (err, user) {
            if (err) {
                res.json({error: err});
            } else {
                if (user.length > 0) {
                    if (bcrypt.compareSync(req.body.password, user[0].password)) {
                        req.session.currentUser = user[0];
                        res.json({user: user, loggedIn: true});
                    } else {
                        res.json({error: 'Password is incorrect.', loggedIn: false});
                    }
                } else {
                    res.json({error: 'Email not found. Please try again or register to continue.', loggedIn: false})
                }
            }
        });
    },

    logout: function (req, res) {
        req.session.destroy(function (err) {
            if (err) {
                console.log(err);
            } else {
                res.json({});
            }
        });
    },

    getCurrent: function(req, res) {
        if (req.session.currentUser) {
            user = req.session.currentUser;
            res.json(user);
        } else {
            res.json({user: user});
        }
    }, 

    update: function (req, res){
        User.findById(req.params.id, function(err, user) {
            if (err){
                console.log('user update function: could not find user');
            } else {
                user.firstName = req.body.firstName;
                user.lastName = req.body.lastName;
                user.email = req.body.email;
                user.phoneNum = req.body.phoneNum;
                user.save(function(err, user) {
                    if (err) {
                        res.json({error: "Update attempt unsuccessful."});
                    } else {
                        res.json({user: user});
                    }
                })
            }
        });
    },

    regHost: function(req, res) {
        User.findById(req.params.id, function (err, user) {
            if (err) {
                console.log(err);
            } else {
                user.userLevel = true;
                user.save(function(err, user) {
                    if (err){
                        res.json({error: 'Unable to register as host. Please try again.'});
                    } else {
                        res.json({user: user});
                    }
                })
            }
        });
    }
}