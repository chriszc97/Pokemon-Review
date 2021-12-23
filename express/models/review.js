const { Schema } = require('mongoose');
const mongoose = require('mongoose');

const Review = new Schema(
  {
    username: { type: String, require: true },
    rating: { type: Number, required: true },
    response: { type: String }
  },
  { timestamp: true }
);
module.exports = Review;
