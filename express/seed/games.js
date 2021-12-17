const db = require('../db');
const { Game, Review } = require('../models');

db.on(
  'error',
  console.error.bind(console, 'Mongo connection (seed/games.js) error:')
);

const main = async () => {
  // const reviews = await Review.find({});
  // const sniperKiller = await Review.find({ username: 'SniperKiller' });
  // const pokeLover = await Review.find({ username: 'PokeLover' });
  const games = [
    {
      title: 'Pokemon Leaf Grean',
      release_date: 'January 29, 2004',
      image: 'https://i.imgur.com/Ciayaon.jpg',
      details:
        'Set off on a grand adventure to fulfill your dreams of becoming a Pokemon Master! Explore the Kanto region and discover wild Pokemon around every corner.'
      // review_id: sniperKiller[0]._id
    },
    {
      title: 'Pokemon Emerald',
      release_date: 'September 16, 2004',
      image: 'https://i.imgur.com/JC56sG2.jpg',
      details: 'The hoen Region!!'
      // review_id: pokeLover[0]._id
    }
  ];
  await Game.insertMany(games);
  console.log('Games were created!');
};
const run = async () => {
  await main();
  db.close();
};
run();
