var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ListingSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true, maxlength: 250 },
    roomType: { type: String, required: true },
    price: { type: Number, required: true },
    amountBeds: { type: Number, required: true },
    rating: { type: Number },
    image: { type: String },
    // bookStatus: { type: Boolean },
    _host: { type: Schema.Types.ObjectId, ref: 'User' },
    location: { type: String, required: true },
    conversations: [{ type: Schema.Types.ObjectId, ref: 'Message' }],
    reservations: [{ type: Schema.Types.ObjectId, ref: 'Reservation'}],
    reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }],
}, {timestamps: true});

mongoose.model('Listing', ListingSchema);