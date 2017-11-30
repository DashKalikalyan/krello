var mongoose = require('mongoose');
var validator = require('validator');
var Schema = mongoose.Schema;
var jwt = require('jsonwebtoken');
var _ = require('lodash');

var UserSchema = new Schema ({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    phoneNumber: {
        type: Number,
        required: true,
        trim:true,
        minlength: 10,
        maxlength:10
    },
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true,
        unique: true,
        validate: {
            validator: validator.isEmail,
            message: '{VALUE} is not a valid email'
        }
    },
    password: {
        type: String,
        required: true,
        minlength:6,
    },
    tokens:[{
        access: {
            type: String,
            required: true
        },
        token: {
            type: String,
            required: true
        }
    }]
});

UserSchema.methods.toJSON = function() {
    var user = this;
    var userObject = user.toObject();
    return _.pick(userObject,['_id', 'email', 'firstName', 'lastName', 'phoneNumber','tokens']);
};

UserSchema.statics.findByToken = function (token) {
    var User = this;
    var decoded;

    try {
        decoded = jwt.verify(token, 'abc123');
    } catch(e) {
        return new Promise ((resolve, reject) => {
            reject('error.test');
        });
    }

    return User.findOne({_id: decoded._id, 'tokens.token': token, 'tokens.access': 'auth'});
};

UserSchema.statics.findByCredentials = function (email) {
    var User = this;
    console.log(email);
    return User.findOne({email: email});

};

UserSchema.methods.generateAuthToken = function () {
    var user = this;
    var access ='auth';
    var token = jwt.sign({_id: user._id, access}, 'abc123').toString();
    user.tokens.push({access: access, token: token});
    return user.save().then((res) => {
        return token;
    });
    // user.save();
    // return token;
};

UserSchema.methods.removeToken = function (token) {
    var user =this;
    return user.update({
        $pull: {
            tokens: {
                token: token
            }
        }
    });
}

var User = mongoose.model('User', UserSchema);

module.exports = {User}

// BASIC PASSWORD STRUCTURE

