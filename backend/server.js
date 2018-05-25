const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const User = require('./users.js');
const Charity = require('./charities.js');
const STATUS_USER_ERROR = 422;
const STATUS_SERVER_ERROR = 500;
const server = express();

server.use(bodyParser.json());

// Users Collection
// post -- authentication
// post -- users
// stretch--admin login
// get -- charities
// post -- charities
// user schema -- need login-email, password, customerID
// charity schema -- title, charityImage, description (longer chunk  of text), winner selection (boolean)
// check github--stripetest (middleware)
// post  add new user to server
server.post ('/users', (req, res) => {
  const { email, password } = req.body;
  // don't want to recreate emails
  if (!email) {
    res.status(STATUS_USER_ERROR).json({ error: 'Must provide email'});
    return;
  }

  const user = new User({email, password});
  user.save((err) => {
    if (err) {
      res.status(STATUS_SERVER_ERROR);
      res.json(err);
    } else {
      res.json(user);
    }
  })
});
//get array of all charities
server.get ('/charities', (req, res) => {
  Charity.find({}, (err, charities) => {
    if (err) {
      res.status(STATUS_SERVER_ERROR).json({ "Error retrieving Charities": err});
      return;
    }
    res.json(charities);
  })
});
// get array of all users
server.get ('/users', (req, res) =>  {
  User.find({}, (err, users) => {
    if (err) {
      res.status(STATUS_SERVER_ERROR).json({ 'Error retrieving Users': err});
      return;
    }
    res.json(users);
  })
});
server.get('/users', (req, res) => {
  const direction = req.params.direction;
  User.find({})
    .sort({'username': direction})
    .exec((err, sortedUsers) => {
      if(err) {
        res.status(422).json({ 'Error Sorting Users': err });
        return;
      }
      res.json(sortedUsers);
  })
});
// get return user with ID
server.get('/users/:id', (req, res) => {
  const { id } = req.params;
  User.findById(id)
    .select('username')
    .exec((err, user) => {
      if (err) {
        res.status(STATUS_USER_ERROR).json({ "Could not find user: ": err});
        return;
      }
      res.json(user);
    })
});

// delete -- delete specified user
server.delete('/users/:id', (req, res) => {
  const { id } = req.params;
  User.findByIdAndRemove(id, (err, user) => {
    if (err) {
      res.status(STATUS_SERVER_ERROR).json({ 'Could not remove user': err });
    } else {
      res.status(200).json(user);
    }
  })
});

// BlogPosts Collection
// post new blogpost
server.post('/posts', (req, res) => {

});
// get -- return array of all blog posts
server.get('/posts', (req, res) => {

});
// get -- blog post with matching ID
server.get('/posts/:id', (req, res) => {

});
// delete -- delete specified blog post
server.delete('/posts/:id', (req, res) => {

});



// Added from Mongo-I-mini
mongoose.Promise = global.Promise;
const connect = mongoose.connect(
  //'mongodb://<dbuser>:<dbpassword>@ds129560.mlab.com:29560/numberless_db'
  'mongodb://localhost/bears',
  { useMongoClient: true }
);

/* eslint no-console: 0 */
connect.then(() => {
  const port = 3000;
  server.listen(port);
  console.log(`Server Listening on ${port}`);
}, (err) => {
  console.log('\n************************');
  console.log("ERROR: Couldn't connect to MongoDB. Do you have it running?");
  console.log('************************\n');
});