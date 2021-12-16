const mongoose = require('mongoose');
let MONGODB_URL = 'mongodb://127.0.0.1:27017/PokemonGameDatabase';

mongoose
  .connect(MONGODB_URL, {
    useUnifiedTopology: true,
    useNewURLParser: true
  })
  .then(() => {
    console.log('Successfull connection!');
  })
  .catch((e) => {
    console.error('Connection Error', e.message);
  });

const db = mongoose.connection;

module.exports = db;
