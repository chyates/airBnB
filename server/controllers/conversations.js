var mongoose = require('mongoose');
var Conversation = mongoose.model('Conversation');
var Listing = mongoose.model('Listing');

module.exports = {
    create: function(req, res) {
        Conversation.find({_guest: req.session.currentUser._id, _listing: req.params.id}, function(err, conversation){
            if (conversation.length > 0) {
                var messages = conversation[0].messageList;
                messages.push({
                    subject: req.body.subject,
                    content: req.body.content,
                    sentAt: Date.now()
                });
                
            }
        })
    }
}