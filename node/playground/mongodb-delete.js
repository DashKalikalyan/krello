const MongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/TodoApp';

MongoClient.connect(url, (err, db) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');


    // DELETES ON Todos COLLECTION


    // deleteMany using callback
    // db.collection('Todos').deleteMany({text: 'Something to do', completed: false}, (err, result) => {
    //     if (err) {
    //         console.log('Can not be deleted', err);
    //     }
    //     console.log(result);
    // });

    // deleteMany using promise
    // db.collection('Todos').deleteMany({text: 'Something to do', completed: false}).then((result) => {
    //     console.log(result);
    // });

    //deleteOne using promise
    // db.collection('Todos').deleteOne({text: 'Something to do', completed: false}).then((result) => {
    //     console.log(result);
    // });


    //deleteOne using callback
    // db.collection('Todos').deleteOne({text: 'Something to do', completed: false}, (err, result) => {
    //     if (err) {
    //         console.log('Can not be deleted', err);
    //     }
    //     console.log(result);
    // });


    //findOneAndDelete using callback
    // db.collection('Todos').findOneAndDelete({text: 'Something to do', completed: false}, (err, result) => {
    //     if (err) {
    //         console.log('Can not be deleted', err);
    //     }
    //     console.log(result);
    // });

    //findOneAndDelete using promise
    // db.collection('Todos').findOneAndDelete({text: 'Something to do', completed: false}).then((result) => {
    //     console.log(result);
    // });

    //DELETES ON Users COLLECTION


    // deleteMany using callback
    // db.collection('Users').deleteMany({name : 'kkd',age: 23 }, (err, result) => {
    //     if (err) {
    //         console.log('Can not be deleted', err);
    //     }
    //     console.log(result);
    // });

    // deleteMany using promise
    // db.collection('Users').deleteMany({name : 'kkd',age: 23 }).then((result) => {
    //     console.log(result);
    // });

    //deleteOne using promise
    // db.collection('Users').deleteOne({name : 'kkd',age: 25 }).then((result) => {
    //     console.log(result);
    // });


    //deleteOne using callback
    // db.collection('Users').deleteOne({name : 'kkd',age: 25 }, (err, result) => {
    //     if (err) {
    //         console.log('Can not be deleted', err);
    //     }
    //     console.log(result);
    // });


    //findOneAndDelete using callback
    // db.collection('Users').findOneAndDelete({name : 'kkd',age: 25 }, (err, result) => {
    //     if (err) {
    //         console.log('Can not be deleted', err);
    //     }
    //     console.log(result);
    // });

    //findOneAndDelete using promise
    // db.collection('Users').findOneAndDelete({name : 'kkd',age: 25 }).then((result) => {
    //     console.log(result);
    // });




    db.close();
});