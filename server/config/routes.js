// Require statments
var mongoose = require('mongoose');
var listings = require('../controllers/listings.js');
var locations = require('../controllers/locations.js');
var messages = require('../controllers/messages.js');
var reservations = require('../controllers/reservations.js');
var reviews = require('../controllers/reviews.js');
var users = require('../controllers/users.js');

// Model imports
var Listing = mongoose.model('Listing');
var Location = mongoose.model('Location');
var Message = mongoose.model('Message');
var Reservation = mongoose.model('Reservation');
var Review = mongoose.model('Review');
var User = mongoose.model('User');

module.exports = function (app) {
    // GET requests

    // POST requests
}