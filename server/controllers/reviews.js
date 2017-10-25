var mongoose = require('mongoose');
var Review = mongoose.model('Review');
var Listing = mongoose.model('Listing');

module.exports = {
    create: function(req, res) {
        Listing.findOne({_id: req.params.id}, function (err, listing) {
            var newReview = new Review({
                title: req.body.title,
                content: req.body.content,
                dateLeft: Date.now(),
                _guest: req.session.currentUser._id
            });
            newReview._listing = listing._id;
            listing.reviews.push(newReview);
            listing.save(function(err) {
                if (err) {
                    console.log("In review create function: could not save to listing reviews");
                } else {
                    newReview.save(function(err, review) {
                        if (err) {
                            console.log("In review create function: could not save review");
                        } else {
                            res.json({review: review});
                        }
                    })
                }
            });
        });
    },
}