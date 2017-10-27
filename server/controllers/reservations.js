var mongoose = require('mongoose');
var Reservation = mongoose.model('Reservation');
var User = mongoose.model('User');
var Listing = mongoose.model('Listing');

module.exports = {
    create: function(req, res) {
        Listing.findOne({_id: req.params.id}, function (err, listing) {
            var newReserve = new Reservation({
                startDate: req.body.startDate,
                endDate: req.body.endDate,
                amtGuests: req.body.amtGuests,
                _booker: req.session.user._id
            });
            newReserve._listing = listing._id;
            listing.reservations.push(newReserve);
            listing.save(function(err) {
                if (err){
                    console.log("Reservation create function; failed to save to listing");
                } else {
                    newReserve.save(function(err, reservation) {
                        if (err) {
                            console.log("Reservation create function: failed to create reserve");
                        } else {
                            res.json({reservation: reservation});
                        }
                    })
                }
            });
        });
    },

    approve: function(req, res) {
        Reservation.findById(req.params.id, function(err, reservation) {
            if (err) {
                console.log("In approve reserve function: could not find reserve");
            } else {
                bookStatus: req.body.bookStatus
                reservation.save(function(err, reservation) {
                    if (err) {
                        console.log("In approve reserve function: could not save bookStatus");
                    } else {
                        res.json({reservation: reservation});
                    }
                })
            }
        });
    },

    update: function(req, res) {
        Reservation.findById(req.params.id, function(err, reservation) {
            if (err) {
                console.log("In update reserve function: could not find reserve");
            } else {
                reservation.startDate = req.body.startDate;
                reservation.endDate = req.body.endDate;
                reservation.amtGuests = req.body.amtGuests;
                reservation.save(function(err, reservation) {
                    if (err) {
                        console.log("In update reserve function: could not save new info");
                    } else {
                        res.json({reservation: reservation});
                    }
                })
            }
        });
    },

    show: function(req, res) {
        Reservation.find({_booker: req.session.user}, function(err, reservations){
            if (err){
                res.json({error: err});
            } else {
                res.json({reservations: reservations});
            }
        });
    },

    find: function(req, res) {
        Reservation.findOne({_id: req.params.id})
        .populate('_booker').populate('_listing')
        .exec(function (err, reservation){
            if (err){
                console.log("In find function, couldn't find reservation");
            } else {
                res.json({reservation: reservation});
            }
        });
    }
}