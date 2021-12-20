const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Game = new Schema(
  {
    title: { type: String, required: true },
    release_date: { type: String, required: true },
    image: { type: String, required: true },
    details: { type: String, required: true }
    // review_id: { type: Schema.Types.ObjectID, ref: 'review_id' }
  },
  { timestamps: true }
);
// module.exports = mongoose.model('game', Game);
module.exports = Game;
