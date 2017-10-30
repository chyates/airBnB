// const users = require('../controllers/user_controller.js');

// Require statments
var mongoose = require('mongoose');
var listings = require('../controllers/listings.js');
// var locations = require('../controllers/locations.js');
var conversations = require('../controllers/conversations.js');
var reservations = require('../controllers/reservations.js');
var reviews = require('../controllers/reviews.js');
var users = require('../controllers/users.js');

// Model imports
var Listing = mongoose.model('Listing');
// var Location = mongoose.model('Location');
var Conversation = mongoose.model('Conversation');
var Reservation = mongoose.model('Reservation');
var Review = mongoose.model('Review');
var User = mongoose.model('User');

module.exports = function (app) {
    // ----------------
    // - GET requests -
    // ----------------

    // Users
    app.get('/api/showUser', function(req, res){
        users.current(req, res);
    })

    app.get('/api/logout', function(req, res){
        users.logout(req, res);
    })

    // Listings
    app.get('/api/currentUser/listings', function(req, res){
        listings.findAll(req, res);
    })

    app.get('/api/currentUser/hostListings', function(req, res){
        listings.findAllUser(req, res);
    })

    app.get('/api/listings/recent', function(req, res){
        listings.findRecent(req, res);
    })

    app.get('/api/currentUser/listing/:id', function(req, res) {
        listings.findOne(req, res);
    })

    // Reservations
    app.get('/api/currentUser/reservations/all', function(req, res){
        reservations.show2(req, res);
    })

    app.get('/api/currentUser/reservations/:id', function(req, res) {
        reservations.find(req, res);
    })

    //Conversations
    app.get('/api/currentUser/inbox/guest', function(req, res){
        conversations.showGuest(req, res);
    })

    app.get('/api/currentUser/inbox/host', function(req, res) {
        conversations.showHost(req, res);
    })

    app.get('/api/currentUser/inbox/:id', function(req, res){
        conversations.find(req, res);
    })

    // Reviews
    app.get('/api/listings/:id/reviews', function(req, res){
        reviews.show(req, res);
    })

    // -----------------
    // - POST requests -
    // -----------------

    // Users
    app.post('/api/register', function(req, res) {
        users.register(req, res);
    })

    app.post('/api/login', function(req, res){
        users.login(req, res);
    })

    app.post('/api/updateUser/:id', function(req, res){
        users.update(req, res);
    })

    app.post('/api/userHost/:id', function(req, res){
        users.regHost(req, res);
    })

    // Listings
    app.post('/api/createListing', function(req, res){
        listings.create(req, res);
    })

    app.post('/api/currentUser/listings/:id/update', function(req, res){
        listings.update(req, res);
    })

    app.post('/api/listings/search', function(req, res){
        listings.search(req, res);
    })

    // Reservations
    app.post('/api/currentUser/listings/:id/createReserve', function(req, res) {
        reservations.create(req, res);
    })

    app.post('/api/currentUser/listings/:id/approve', function(req, res) {
        reservations.approve(req, res);
    })

    app.post('/api/currentUser/reservations/:id/update', function (req, res) {
        reservations.update(req, res);
    })

    // Reviews
    app.post('/api/currentUser/listings/:id/newReview', function(req, res) {
        reviews.create(req, res);
    })

    // Conversations
    app.post('/api/currentUser/listings/:id/guestMessage', function(req, res){
        conversations.createAsGuest(req, res);
    })

    app.post('/api/currentUser/listings/:id/hostMessage', function(req, res){
        conversations.createAsGuest(req, res);
    })

    // Catch-all route
    // app.all("*", (req, res, next) => {
    //     res.sendFile(path.resolve("./frontEnd/dist/index.html"));
    // })

}