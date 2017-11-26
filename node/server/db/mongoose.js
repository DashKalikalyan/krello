var mongoose = require('mongoose');

//mpromise (mongoose's default promise library) is deprecated, plug in your own promise library
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp', {useMongoClient: true});

module.exports = {
    mongoose: mongoose
}