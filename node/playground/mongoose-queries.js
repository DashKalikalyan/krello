var mongoose = require ('../server/db/mongoose').mongoose;
var Todo = require ('../server/models/todo').Todo;
var User = require ('../server/models/user').User;

var id='5a141091f191630720c760d3';

// Todo.find({_id: id}, (err, docs) => {
//     if(err) {
//         console.log('Can not be fetched:',err);
//     } else {
//         console.log('Data fetched:', docs);
//     }
// });

// Todo.find({_id: id}).then((docs) => {
//     console.log('Data fetched:', docs);
// }, (err) => {
//     console.log('Can not be fetched:',err);
// });

// Todo.findOne({text: 'hi there'}).then((docs) => {
//     console.log('Data fetched:', docs);
// }, (err) => {
//     console.log('Can not be fetched:',err);
// });

// Todo.findOne({text: 'hi there'}, (err, docs) => {
//     if(err) {
//         console.log('Can not be fetched:',err);
//     } else {
//         console.log('Data fetched:', docs);
//     }
// });

// Todo.findById('5a13eba3aa75e005f235a23b').then((docs) => {
//     console.log('Data fetched:', docs);
// }, (err) => {
//     console.log('Can not be fetched:',err);
// });

// Todo.findById('5a13eba3aa75e005f235a23b').then((docs) => {
//     if(!docs) {
//         console.log('No data having that ID');
//     } else {
//         console.log('Data fetched:', docs);
//     }
// }, (err) => {
//     console.log('Can not be fetched:',err);
// });


// FOR USER COLLECTION

// User.find({_id: id}, (err, docs) => {
//     if(err) {
//         console.log('Can not be fetched:',err);
//     } else {
//         console.log('Data fetched:', docs);
//     }
// });

// User.find({_id: id}).then((docs) => {
//     console.log('Data fetched:', docs);
// }, (err) => {
//     console.log('Can not be fetched:',err);
// });


// User.findOne({email: 'test1@test.com'}).then((docs) => {
//     console.log('Data fetched:', docs);
// }, (err) => {
//     console.log('Can not be fetched:',err);
// });

// User.findOne({email: 'test1@test.com'}, (err, docs) => {
//     if(err) {
//         console.log('Can not be fetched:',err);
//     } else {
//         console.log('Data fetched:', docs);
//     }
// });

// User.findById('5a141091f191630720c760d3').then((docs) => {
//     console.log('Data fetched:', docs);
// }, (err) => {
//     console.log('Can not be fetched:',err);
// });

// User.findById('5a141091f191630720c760d3').then((docs) => {
//     if(!docs) {
//         console.log('No data having that ID');
//     } else {
//         console.log('Data fetched:', docs);
//     }
// }, (err) => {
//     console.log('Can not be fetched:',err);
// });



