const db = require('../db');
const { Review } = require('../models');

db.on('error', console.error.bind(console, 'mongoDB connection error:'));
const main = async () => {
  const reviews = [
    {
      username: 'SniperKiller',
      rating: 4,
      response: 'Best game ever'
    },
    {
      username: 'PokeLover',
      rating: 5,
      response: 'Amazing game to play!'
    }
  ];
  await Review.insertMany(reviews);
  console.log('created Publishers');
};
const run = async () => {
  await main();
  db.closed();
};
run();
