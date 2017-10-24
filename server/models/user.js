const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    first_name: {type: String},
    last_name: {type: String},
    email: {type: String, unique: true},
    password: {type: String}
});

UserSchema.plugin(uniqueValidator);

UserSchema.pre('save', function(done) {
    this.email = this.email.toLowerCase();
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8));
    done();
});

mongoose.model('User', UserSchema);