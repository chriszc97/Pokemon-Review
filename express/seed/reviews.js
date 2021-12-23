const db = require('../db');
const { Review } = require('../models');

db.on('error', console.error.bind(console, 'mongoDB connection error:'));
const main = async () => {
  const reviews = [
    {
      username: 'SniperKiller',
      rating: 10,
      response: 'Best game ever'
    },
    {
      username: 'PokeLover',
      rating: 8,
      response: 'Amazing game to play!'
    },
    {
      username: 'Troller84',
      rating: 2,
      response: 'Way too easy'
    },
    {
      username: 'Pokemaniac',
      rating: 10,
      response: 'Dragonite is op!'
    },
    {
      username: 'User123',
      rating: 6,
      response: 'I loved this and played it for years'
    }
  ];
  await Review.insertMany(reviews);
  console.log('created Reviews');
};
const run = async () => {
  await main();
  db.close();
};
run();
