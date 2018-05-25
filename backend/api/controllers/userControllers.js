const mongoose = require('mongoose');

const User = require('../models/UserModel');

const STATUS_USER_ERROR = 422;
const STATUS_SERVER_ERROR = 500;

const createUser = (req, res) => {
  const password = req.password;
  const { email } = req.body;
  if (!email) {
    res.status(STATUS_USER_ERROR).json({ error: 'Must provide email'});
    return;
  }
  const newUser = new User({ email, password });
  newUser
    .save()
    .then(createdUser => res.json(createdUser))
    .catch(err => res.status(STATUS_SERVER_ERROR).json(err))
};

const userLogin = (req, res) => {
  res.json(req.loggedInUser);
}



module.exports = {
  createUser,
  userLogin
}