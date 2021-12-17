const mongoose = require('mongoose');

const GameSchema = require('./game');
const ReviewSchema = require('./review');

const Game = mongoose.model('book', GameSchema);
const Review = mongoose.model('review', ReviewSchema);

module.exports = {
  Game,
  Review
};
