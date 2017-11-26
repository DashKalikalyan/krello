var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Todo = mongoose.model('Todo', new Schema({
    text: {
        type: String,
        required: true,
        trim: true,
        minlength: 5
    },
    toBeCompletedBy: {
        type: Date,
        required: true,
        trim: true
    },
    priority: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Date,
        default: null
    },
    category: {
        // home, work, other, study
        type:String,
        required: true,
        trim: true
    },

    _creator: {
        required: true,
        type: mongoose.Schema.Types.ObjectId,
    }
}));

module.exports = {Todo}