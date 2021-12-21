const db = require('../db');
const { Game, Review } = require('../models');
db.on(
  'error',
  console.error.bind(console, 'Mongo connection (seed/games.js) error:')
);

const main = async () => {
  const reviews = await Review.find({});
  const sniperKiller = await Review.find({ username: 'SniperKiller' });
  const pokeLover = await Review.find({ username: 'PokeLover' });
  console.log(sniperKiller[0].response);
  const games = [
    {
      title: 'Pokemon Leaf Grean',
      release_date: 'January 29, 2004',
      image: 'https://i.imgur.com/Ciayaon.jpg',
      details:
        'Set off on a grand adventure to fulfill your dreams of becoming a Pokemon Master! Explore the Kanto region and discover wild Pokemon around every corner.',
      reviews: sniperKiller[0]._id
    },
    {
      title: 'Pokemon Fire Red',
      release_date: 'January 29, 2004',
      image: 'https://i.imgur.com/u424JbL.jpg',
      details:
        'Set off on a grand adventure to fulfill your dreams of becoming a Pokemon Master! Explore the Kanto region and discover wild Pokemon around every corner.',
      review_id: pokeLover[0]._id
    },
    {
      title: 'Pokemon Emerald',
      release_date: 'September 16, 2004',
      image: 'https://i.imgur.com/VBTQh8t.jpgg',
      details: 'The hoen Region!!',
      reviews: sniperKiller[0]._id
    },
    {
      title: 'Pokemon Platinum',
      release_date: 'September 18, 2008',
      image: 'https://i.imgur.com/NQ5dk9R.png',
      details: 'The Sinoh Region!!',
      reviews: sniperKiller[0]._id
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
