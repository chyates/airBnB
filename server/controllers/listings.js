var mongoose = require('mongoose');
var Listing = mongoose.model('Listing');
var User = mongoose.model('User');

module.exports = {
    create: function(req, res) {
        User.findOne({_id: req.session.currentUser._id}, function(err, user){
            var newListing = new Listing({
                title: req.body.title,
                description: req.body.description,
                roomType: req.body.roomType,
                price: req.body.price,
                amountBeds: req.body.amountBeds,
                _location: req.body.location
            });
            newListing._host = user._id;
            newListing.messages = [];
            newListing.reservations = [];
            newListing.reviews = [];
            user.listings.push(newListing);
            user.save(function (err){
                if (err) {
                    console.log("Couldn't save listing to user", err)
                } else {
                    newListing.save(function(err, listing){
                        if (err){
                            console.log("Couldn't save listing", err);
                        } else {
                            res.json({listing: listing});
                        }
                    });
                }
            });
        });
    },

    findAllUser: function(req, res) {
        Listing.find({_user: req.session.currentUser}, function(err, listings){
            if (err){
                res.json({error: err});
            } else {
                res.json({listings: listings});
            }
        });
    },

    findOne: function(req, res){
        Listing.findOne({_id: req.params.id})
        .populate('reviews').populate('_host').populate('_location')
        .exec(function (err, listing){
            if (err){
                console.log("In findOne function, couldn't find listing");
            } else {
                res.json({listing: listing});
            }
        });
    },

    // **WORK ON FILTER WHEN ERIC FINISHES SEARCH**

    update: function(req, res) {
        Listing.findById(req.params.id, function(err, listing){
            if (err) {
                console.log('listing update function: could not find listing');
            } else {
                listing.title = req.body.title;
                listing.description = req.body.description;
                listing.roomType = req.body.roomType;
                listing.price = req.body.price;
                listing.amountBeds = req.body.amountBeds;
                listing.save(function(err, listing){
                    if (err) {
                        res.json({error: "Update attempt unsuccessful"});
                    } else {
                        res.json({listing: listing});
                    }
                })
            }
        });
    },
}