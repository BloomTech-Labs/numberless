const mongoose = require('mongoose');

const Charity = require('../models/CharityModel');

const STATUS_USER_ERROR = 422;
const STATUS_SERVER_ERROR = 500;

const createCharity = (req, res) => {
  console.log(req.body);
  const { 
    charity,
    image,
    description,
    } = req.body;
  const winner = false;
  const active = false;
  const votes = 0;
  const newCharity = new Charity({ 
    charity, 
    image,
    description,
    winner,
    active,
    votes
   });
  newCharity
    .save()
    .then(createdCharity => res.json(createdCharity))
    .catch(err => res.status(STATUS_SERVER_ERROR).json(err))
};

const getCharities = (req, res) => {
  Charity.find({}, (err, charities) => {
    if (err) {
      res.status(STATUS_SERVER_ERROR).json({ "Error retrieving Charities": err});
      return;
    }
    res.json(charities);
  })
};

module.exports = {
  createCharity,
  getCharities
}