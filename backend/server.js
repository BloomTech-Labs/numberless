require('dotenv').config();

const bodyParser = require ('body-parser');
const CORS = require('cors');
const express = require ('express');
const mongoose = require ('mongoose');

const server = express();
const PORT = process.env.PORT;
const DB_URL = process.env.DB_URL;

const routes = require ('./api/routes/routes');

mongoose.Promise = global.Promise;
mongoose.connect(`${DB_URL}`);

server.use(bodyParser.json());
server.use(CORS());

const whitelist = ['http://localhost:3000', 'http://numberlessapp.herokuapp.com/']
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
  methods: 'GET, PUT, POST, DELETE'
}

routes(server);

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// <----- code after this line contains unfinished routes ----->

// //get array of all charities
// server.get ('/charities', (req, res) => {
//   Charity.find({}, (err, charities) => {
//     if (err) {
//       res.status(STATUS_SERVER_ERROR).json({ "Error retrieving Charities": err});
//       return;
//     }
//     res.json(charities);
//   })
// });
// // get array of all users
// server.get ('/users', (req, res) =>  {
//   User.find({}, (err, users) => {
//     if (err) {
//       res.status(STATUS_SERVER_ERROR).json({ 'Error retrieving Users': err});
//       return;
//     }
//     res.json(users);
//   })
// });
// server.get('/users', (req, res) => {
//   const direction = req.params.direction;
//   User.find({})
//     .sort({'username': direction})
//     .exec((err, sortedUsers) => {
//       if(err) {
//         res.status(422).json({ 'Error Sorting Users': err });
//         return;
//       }
//       res.json(sortedUsers);
//   })
// });
// // get return user with ID
// server.get('/users/:id', (req, res) => {
//   const { id } = req.params;
//   User.findById(id)
//     .select('username')
//     .exec((err, user) => {
//       if (err) {
//         res.status(STATUS_USER_ERROR).json({ "Could not find user: ": err});
//         return;
//       }
//       res.json(user);
//     })
// });

// // delete -- delete specified user
// server.delete('/users/:id', (req, res) => {
//   const { id } = req.params;
//   User.findByIdAndRemove(id, (err, user) => {
//     if (err) {
//       res.status(STATUS_SERVER_ERROR).json({ 'Could not remove user': err });
//     } else {
//       res.status(200).json(user);
//     }
//   })
// });



