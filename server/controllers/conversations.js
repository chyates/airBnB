var mongoose = require('mongoose');
var Conversation = mongoose.model('Conversation');
var Listing = mongoose.model('Listing');

module.exports = {
    createAsGuest: function(req, res) {
        Conversation.find({_guest: req.session.currentUser._id, _listing: req.params.id}, function(err, conversation){
            if (conversation.length > 0) {
                var messages = conversation[0].messageList;
                messages.push({
                    subject: req.body.subject,
                    content: req.body.content,
                    sentAt: Date.now(),
                    sender: req.session.currentUser._id,
                    recipient: conversation.host
                });
            } else {
                var newConversation = new Conversation({
                    _guest: req.session.currentUser._id,
                    _listing: req.params.id,
                    // host: edit this one
                    messageList: [{
                        subject: req.body.subject,
                        content: req.body.content,
                        sentAt: Date.now(),
                        sender: req.session.currentUser._id,
                        recipient: conversation.host
                    }]
                });
                newConversation.save(function(err, conversation){
                    if (err) {
                        console.log("In create as guest function: couldn't save conversation start");
                    } else {
                        res.json({conversation: conversation});
                    }
                });
            }
        });
    },

    createAsHost: function(req, res) {
        Conversation.find({host: req.session.currentUser._id, _listing: req.params.id}, function(err, conversation){
            if (conversation.length > 0) {
                var messages = conversation[0].messageList;
                messages.push({
                    subject: req.body.subject,
                    content: req.body.content,
                    sentAt: Date.now(),
                    sender: req.session.currentUser._id,
                    recipient: conversation._guest
                });
            } else {
                var newConversation = new Conversation({
                    _guest: req.session.currentUser._id,
                    _listing: req.params.id,
                    // host: edit this one
                    messageList: [{
                        subject: req.body.subject,
                        content: req.body.content,
                        sentAt: Date.now(),
                        sender: req.session.currentUser._id,
                        recipient: conversation.host
                    }]
                });
                newConversation.save(function(err, conversation){
                    if (err) {
                        console.log("In create as host function: couldn't save conversation start");
                    } else {
                        res.json({conversation: conversation});
                    }
                });
            }
        });
    },

    showGuest: function(req, res) {
        Conversation.find({_guest: req.session.currentUser._id}, function (err, conversation){
            if (err) {
                console.log("In show guest inbox function: could not load message list");
            } else {
                res.json({conversation: conversation});
            }
        });
    },

    showHost: function (req, res){
        Conversation.find({_guest: req.session.currentUser._id}, function (err, conversation){
            if (err) {
                console.log("In show guest inbox function: could not load message list");
            } else {
                res.json({conversation: conversation});
            }
        });
    },

    find: function(req, res) {
        Conversation.findById({_id: req.params.id}, function(err, message){
            if (err) {
                console.log("In view one message function: could not find message");
            } else {
                res.json({message: message});
            }
        })
    }
}