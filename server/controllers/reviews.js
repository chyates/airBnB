var mongoose = require('mongoose');
var Review = mongoose.model('Review');
var Listing = mongoose.model('Listing');

module.exports = {
    create: function(req, res) {
        console.log("Made it to create function in controllers, listing id:", req.params.id);
        Listing.findOne({_id: req.params.id}, function (err, listing) {
            var newReview = new Review({
                title: req.body.title,
                content: req.body.content,
                dateLeft: Date.now(),
                _guest: req.session.user._id
            });
            console.log("Listing found:", listing);
            newReview._listing = listing._id;
            console.log("Review created:", newReview);
            listing.reviews.push(newReview);
            console.log("Review added to listing:",listing.reviews);
            listing.save(function(err) {
                if (err) {
                    console.log("In review create function: could not save to listing reviews");
                } else {
                    newReview.save(function(err, review) {
                        if (err) {
                            console.log("In review create function: could not save review");
                        } else {
                            console.log("success!");
                            res.json({review: review});
                        }
                    })
                }
            });
        });
    },

    show: function(req, res){
        console.log("Show reviews function:", req.params.id);
        Review.find({_listing: req.params.id})
        .populate('_guest')
        .exec(function(err, reviews){
            if (err) {
                console.log("Could not find reviews of listing id:", req.params.id);
            } else {
                res.json({reviews: reviews})
            }
        })
    }
}