var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ReviewSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    helpfulVotes: { type: Number },
    _guest: { type: Schema.Types.ObjectId, ref: 'User' },
    _listing: { type: Schema.Types.ObjectId, ref: 'Listing' },
}, {timestamps: true});

mongoose.model('Review', ReviewSchema);