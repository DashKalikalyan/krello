const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

var url = 'mongodb://localhost:27017/TodoApp';

MongoClient.connect(url, (err, db) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    db.collection('Todos').find().toArray().then((docs) =>{
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch records', err);
    });

    db.collection('Todos').find().count().then((count) => {
        console.log('Todos Count:', count);
    }, (err) => {
        console.log('Unable to fetch records', err);
    });

    db.close();
});