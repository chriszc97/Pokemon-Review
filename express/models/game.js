const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Game = new Schema(
  {
    title: { type: String, required: true },
    release_date: { type: String, required: true },
    image: { type: String, required: true },
    details: { type: String, required: true },
    reviews: { type: Schema.Types.ObjectId, ref: 'reviews' }
  },
  { timestamps: true }
);
// module.exports = mongoose.model('game', Game);
module.exports = Game;
