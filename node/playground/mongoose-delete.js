var mongoose = require ('../server/db/mongoose').mongoose;
var Todo = require ('../server/models/todo').Todo;
var User = require ('../server/models/user').User;

var id='5a13a21370a4c903c0e98236';

// Todo.remove({_id: id}, (err, docs) => {
//     if(err) {
//         console.log('Can not be deleted:',err);
//     } else {
//         console.log('Data deleted:', docs);
//     }
// });

// Todo.remove({_id: id}).then((docs) => {
//     console.log('Data deleted:', docs);
// }, (err) => {
//     console.log('Can not be deleted:',err);
// });

// Todo.findOneAndRemove({text: 'hi there'}).then((docs) => {
//     console.log('Data deleted:', docs);
// }, (err) => {
//     console.log('Can not be deleted:',err);
// });

// Todo.findOneAndRemove({text: 'hi there'}, (err, docs) => {
//     if(err) {
//         console.log('Can not be deleted:',err);
//     } else {
//         console.log('Data deleted:', docs);
//     }
// });

// Todo.findByIdAndRemove('5a13d960d058bf055ada3da3').then((docs) => {
//     console.log('Data deleted:', docs);
// }, (err) => {
//     console.log('Can not be deleted:',err);
// });

// Todo.findByIdAndRemove('5a13eba3aa75e005f235a23b').then((docs) => {
//     if(!docs) {
//         console.log('No data having that ID');
//     } else {
//         console.log('Data deleted:', docs);
//     }
// }, (err) => {
//     console.log('Can not be deleted:',err);
// });


// FOR USER COLLECTION

// User.remove({_id: id}, (err, docs) => {
//     if(err) {
//         console.log('Can not be deleted:',err);
//     } else {
//         console.log('Data deleted:', docs);
//     }
// });

// User.remove({_id: id}).then((docs) => {
//     console.log('Data deleted:', docs);
// }, (err) => {
//     console.log('Can not be deleted:',err);
// });


// User.findOneAndRemove({email: 'test1@test.com'}).then((docs) => {
//     console.log('Data deleted:', docs);
// }, (err) => {
//     console.log('Can not be deleted:',err);
// });

// User.findOneAndRemove({email: 'test1@test.com'}, (err, docs) => {
//     if(err) {
//         console.log('Can not be deleted:',err);
//     } else {
//         console.log('Data deleted:', docs);
//     }
// });

// User.findByIdAndRemove('5a13a22d81290603c3ccf41f').then((docs) => {
//     console.log('Data deleted:', docs);
// }, (err) => {
//     console.log('Can not be deleted:',err);
// });

// User.findByIdAndRemove('5a141091f191630720c760d3').then((docs) => {
//     if(!docs) {
//         console.log('No data having that ID');
//     } else {
//         console.log('Data deleted:', docs);
//     }
// }, (err) => {
//     console.log('Can not be deleted:',err);
// });



