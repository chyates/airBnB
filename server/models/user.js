var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema({
    firstName: { type: String, required: true, minlength: 2 },
    lastName: { type: String, required: true, minlength: 2 },
    email: { type: String, required: true, minlength: 2 },
    birthday: { type: Date, required: true },
    password: { type: String, required: true, minlength: 8 },
    userLevel: { type: Boolean },
    messages: [{ type: Schema.Types.ObjectId, ref: 'Message' }],
    reservations: [{ type: Schema.Types.ObjectId, ref: 'Reservation' }],
    listings: [{ type: Schema.Types.ObjectId, ref: 'Listing' }],
    reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }],
}, { timestamps: true });

mongoose.model('User', UserSchema);