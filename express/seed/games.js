const db = require('../db');
const Game = require('../models/game');

db.on(
  'error',
  consol.error.bind(console, 'Mongo connection (seed/games.js) error:')
);

const main = async () => {
  const games = [
    {
      title: 'Pokemon Leaf Grean',
      release_date: 'January 29, 2004',
      image: 'https://i.imgur.com/Ciayaon.jpg',
      details:
        'Set off on a grand adventure to fulfill your dreams of becoming a Pokemon Master! Explore the Kanto region and discover wild Pokemon around every corner.'
    }
  ];
};
