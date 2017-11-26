const MongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/TodoApp';

MongoClient.connect(url, (err, db) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');


    // UPDATES ON Todos COLLECTION


    //updateMany using callback
    // db.collection('Todos').updateMany({text: 'Walk the dog'},{$set:{completed: false}}, (err, result) => {
    //     if (err) {
    //         console.log('Can not be updated', err);
    //     }
    //     console.log(result);
    // });

    // updateMany using promise
    // db.collection('Todos').updateMany({text: 'Walk the dog'},{$set:{completed: true}}).then((result) => {
    //     console.log(result);
    // });

    //updateOne using promise
    // db.collection('Todos').updateOne({text: 'Something to do'},{$set:{completed: true}}).then((result) => {
    //     console.log(result);
    // });


    //updateOne using callback
    // db.collection('Todos').updateOne({text: 'Walk the dog'},{$set:{completed: false}}, (err, result) => {
    //     if (err) {
    //         console.log('Can not be updated', err);
    //     }
    //     console.log(result);
    // });


    //findOneAndUpdate using callback
    // db.collection('Todos').findOneAndUpdate({text: 'Something to do'},{$set:{completed: true}}, {returnOriginal : false}, (err, result) => {
    //     if (err) {
    //         console.log('Can not be updated', err);
    //     }
    //     console.log(result);
    // });

    //findOneAndUpdate using promise
    // db.collection('Todos').findOneAndUpdate({text: 'Something to do'},{$set:{completed: true}},{returnOriginal : false}).then((result) => {
    //     console.log(result);
    // });

    //UPDATES ON Users COLLECTION


    // updateMany using callback
    // db.collection('Users').updateMany({name : 'kkd'},{$set: {age: 25}}, (err, result) => {
    //     if (err) {
    //         console.log('Can not be updated', err);
    //     }
    //     console.log(result);
    // });

    // updateMany using promise
    // db.collection('Users').updateMany({name : 'kkd'},{$set: {age: 30}}).then((result) => {
    //     console.log(result);
    // });

    //updateOne using promise
    // db.collection('Users').updateOne({name : 'kkd'},{$set: {age: 25}}).then((result) => {
    //     console.log(result);
    // });


    //updateOne using callback
    // db.collection('Users').updateOne({name : 'kkd'},{$set: {age: 32}}, (err, result) => {
    //     if (err) {
    //         console.log('Can not be updated', err);
    //     }
    //     console.log(result);
    // });


    //findOneAndUpdate using callback
    // db.collection('Users').findOneAndUpdate({name : 'kkd'},{$set: {age: 51}}, {returnOriginal: false}, (err, result) => {
    //     if (err) {
    //         console.log('Can not be updated', err);
    //     }
    //     console.log(result);
    // });

    //findOneAndUpdate using promise
    // db.collection('Users').findOneAndUpdate({age: 30}, {$set :{name: 'kkd'}}, {returnOriginal: false}).then((result) => {
    //     console.log(result);
    // });




    db.close();
});