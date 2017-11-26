const MongoClient = require('mongodb').MongoClient;

// const {MongoClient} = require('mongodb');

var url = 'mongodb://localhost:27017/TodoApp';

MongoClient.connect(url, (err, db) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').insertOne({
    //     text : 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert todo', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // db.collection('Users').insertOne({
    //     name : 'kkd',
    //     age: 25,
    //     location: 'San Jose'
    // }, (err, result) => {
    //     if (err) {
    //        return console.log('Unable to insert user', err);
    //     }
    //     console.log(result.ops);
    //     console.log(result.ops[0]._id);
    //     console.log(result.ops[0]._id.getTimestamp());
    // })



    db.close();
});