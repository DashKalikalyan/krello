var express = require('express');
var bodyParser = require('body-parser');
//being added to control the update being done by user in PATCH HTTP request
const _ = require('lodash');
var bcrypt = require ('bcryptjs');

var mongoose = require ('./db/mongoose').mongoose;
var Todo = require ('./models/todo').Todo;
var User = require ('./models/user').User;
var authenticate = require('./middleware/authenticate').authenticate;
// import {authenticate} from './middleware/authenticate';

//ALTERNATE METHOD
// var {mongoose} = require ('./db/mongoose');
// var {Todo} = require ('./models/todo');
// var {User} = require ('./models/user');



var app = express();

app.use(bodyParser.json());

app.post('/todos', authenticate,(req, res) => {
    var todo = new Todo ({
        text: req.body.text,
        toBeCompletedBy: req.body.toBeCompletedBy,
        priority: req.body.priority,
        category: req.body.category,
        _creator: req.user._id
    });
    console.log(todo);
    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});


app.get('/todos', authenticate, (req, res) => {
    Todo.find({_creator:req.user._id},'text').then((todos) => {
        res.send(todos);
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get('/todos/:id', authenticate,(req, res) => {
    Todo.findOne({_id:req.params.id, _creator: req.user._id}).then((doc) => {
        if(!doc) {
            res.status(404).send(doc);
        } else {
            res.send(doc);
        }
    }, (err) => {
        res.status(400).send(err);
    });
});

app.delete('/todos/:id', authenticate, (req, res) => {
    Todo.findOneAndRemove({_id:req.params.id, _creator: req.user._id}).then((doc) => {
        if(!doc) {
            res.status(404).send(doc);
        } else {
            res.send(doc);
        }
    }, (err) => {
        res.status(400).send(err);
    });
});


app.patch('/todos/:id', authenticate,(req, res)=> {
    var body = _.pick(req.body, ['text', 'completed']);
    if (_.isBoolean(body.completed) && body.completed) {
        body.completedAt = new Date();

    } else {
        body.completed=false;
        body.completedAt=null;
    }
    Todo.findOneAndUpdate({_id:req.params.id, _creator: req.user._id}, {$set: body}, {new: true}).then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});


app.get('/users/me', authenticate, (req, res) => {
    res.send(req.user);
});

app.post('/users', (req, res) => {
    var body = _.pick(req.body, [ 'firstName', 'lastName', 'phoneNumber', 'email','password']);
    bcrypt.hash(body.password, 10, (err, hash) => {
        if (err) {
            console.log();
        } else {
            body.password =hash;
            console.log(body);
            var user = new User (body);

            user.save().then((doc) => {
                return user.generateAuthToken();
            }).then((token) => {
                res.header('x-auth', token).send(user);
            }).catch((e) => {
                res.status(400).send(e);
            });
        }

    });
});

app.post('/users/login', (req, res) => {
    var body = _.pick(req.body, ['email', 'password']);
    console.log(body);
    User.findByCredentials(body.email).then((user) => {
        if(!user) {
            res.send('no user present with that id');
        } else {
            bcrypt.compare(body.password,user.password, (err, result) => {
                if(result) {
                    user.generateAuthToken().then((token) => {
                        res.header('x-auth', token).send(body);
                    });
                }
            });
        }
    }).catch((e) => {
        res.send(e);
    });
});


app.get('/users', (req, res) => {
    User.find({}, 'email').then((users) => {
        res.send(users);
    }, (e) => {
        res.status(400).send(e);
    });
});

app.delete('/users/me/token', authenticate, (req, res) => {
    req.user.removeToken(req.token).then(() => {
        res.status(200).send('logged out');
    });
});

app.listen(3000, () => {
    console.log('started on port 3000');
});


// app.get('/users/:id', (req, res) => {
//     User.findById(req.params.id).then((doc) => {
//         if(!doc) {
//             res.status(404).send(doc);
//         } else {
//             res.send(doc);
//         }
//     }, (err) => {
//         res.status(400).send(err);
//     });
// });


// app.patch('/users/:id', (req, res) => {
//     var body = _.pick(req.body, 'email');
//     User.findByIdAndUpdate(req.params.id, {$set: body}, {new: true}).then((doc) => {
//         res.send(doc);
//     }, (e) => {
//         res.status(400).send(e);
//     });
// });

// app.delete('/users/:id', (req, res) => {
//     User.findByIdAndRemove(req.params.id).then((doc) => {
//         if(!doc) {
//             res.status(404).send(doc);
//         } else {
//             res.send(doc);
//         }
//     }, (err) => {
//         res.status(400).send(err);
//     });
// });

//
// var newTodo = new Todo({
//     text: 'hit there'
// });

//Insert Using Promise

// newTodo.save().then((doc) => {
//     console.log('Saved todo:',doc);
// }, (e) => {
//     console.log('Unable to save todo',e);
// });

//Insert Using Callback

// newTodo.save((err) => {
//     if (err) {
//         console.log('Unable to save todo',err);
//     } else {
//         console.log('Saved todo');
//     }
//
// });




// var newUser = new User({email: 'test@test.com'});
//
// newUser.save().then((doc) => {
//     console.log('Saved user:', doc);
// }, (e) => {
//     console.log('Unable to save user',e);
// });