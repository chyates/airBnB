var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ConversationSchema = new mongoose.Schema({
    _guest: { type: Schema.Types.ObjectId, ref: 'User' },
    _listing: { type: Schema.Types.ObjectId, ref: 'Listing' },
    messageList: [{
        subject: { type: String },
        content: { type: String },
        sender: { type: Schema.Types.ObjectId },
        recipient: { type: Schema.Types.ObjectId },
        sentAt: { type: Date, default: Date.now() }
    }]
});

mongoose.model('Conversation', ConversationSchema);