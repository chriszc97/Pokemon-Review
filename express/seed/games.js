const db = require('../db');
const { Game, Review } = require('../models');
db.on(
  'error',
  console.error.bind(console, 'Mongo connection (seed/games.js) error:')
);

const main = async () => {
  const sniperKiller = await Review.find({ username: 'SniperKiller' });
  const pokeLover = await Review.find({ username: 'PokeLover' });
  console.log(sniperKiller[0].response);
  const games = [
    {
      title: 'Pokemon Leaf Grean',
      release_date: 'January 29, 2004',
      image: 'https://i.imgur.com/Ciayaon.jpg',
      details:
        'Set off on a grand adventure to fulfill your dreams of becoming a Pokemon Master! Explore the Kanto region and discover wild Pokemon around every corner. This is one distinct region of many in the Pokémon world, which includes varied geographical habitats for the Pokémon species, human-populated towns and cities, and routes between locations.',
      reviews: sniperKiller[0]._id
    },
    {
      title: 'Pokemon FireRed',
      release_date: 'January 29, 2004',
      image: 'https://i.imgur.com/u424JbL.jpg',
      details:
        'Set off on a grand adventure to fulfill your dreams of becoming a Pokemon Master! Explore the Kanto region and discover wild Pokemon around every corner. This is one distinct region of many in the Pokémon world, which includes varied geographical habitats for the Pokémon species, human-populated towns and cities, and routes between locations.',
      review_id: pokeLover[0]._id
    },
    {
      title: 'Pokemon SoulSilver',
      release_date: 'September 12, 2009',
      image: 'https://m.media-amazon.com/images/I/81FO07s-2zL._SX522_.jpg',
      details:
        "SoulSilver take place in the Johto and Kanto region of the franchise's fictional universe, which features special creatures called Pokémon. The basic goal of the game is to become the best Pokémon trainer in both the Johto and Kanto regions, which is done by raising and cataloging Pokémon and defeating other trainers.!",
      reviews: sniperKiller[0]._id
    },
    {
      title: 'Pokemon Emerald',
      release_date: 'September 16, 2004',
      image: 'https://i.imgur.com/VBTQh8t.jpgg',
      details:
        "Pokémon Emerald is the third game set in the land of Hoenn. On first looks this game seems to be identical to it's predecessors, Ruby & Sapphire, however there is much more that meet's the eye in this game.The Battle Frontier contains 7 buildings which all incorporate a different style of battling where you have to battle through multiple trainers to get to their leader's, The Frontier Brains!",
      reviews: sniperKiller[0]._id
    },
    {
      title: 'Pokemon Platinum',
      release_date: 'September 18, 2008',
      image: 'https://i.imgur.com/NQ5dk9R.png',
      details:
        "Similar to Diamond and Pearl, Platinum is set in the fictional region of Sinnoh. Platinum features slightly different environments, there is snow on the ground in locations where it was not found in Diamond and Pearl, to reflect this change the player characters and the player's rival are dressed for colder weather when compared with their designs from Diamond and Pearl.",
      reviews: sniperKiller[0]._id
    },
    {
      title: 'Pokemon Black',
      release_date: 'September 18, 2010',
      image: 'https://m.media-amazon.com/images/I/51IjaK7+g7L.jpg',
      details:
        'Pokémon Black and White takes place in the Unova region, based on New York City. As with all regions, Unova consists of a number of cities and towns connected by Routes. Random encounters may take place in tall grass along routes or in bodies of water. The player occasionally battles Trainers in cities and towns, as well as along routes.',
      reviews: sniperKiller[0]._id
    },
    {
      title: 'Pokemon Y',
      release_date: 'October 12, 2013',
      image: 'https://i.imgur.com/iuNejCH.jpg',
      details:
        "Pokémon X and Y are the first titles in the main series presented in fully 3D polygonal graphics, allowing for more interactivity with the overworld and more dynamic action during battles. Players are also able to customize their Pokémon trainer's appearance, choosing gender, skin tone and hair color at the start of the game, and can later acquire outfits and accessories in-game to change their character's look",
      reviews: sniperKiller[0]._id
    },
    {
      title: 'Pokemon Sun',
      release_date: 'November 18, 2016',
      image: 'https://i.imgur.com/SqaEzeC.jpg',
      details:
        'Pokémon Sun and Moon are role-playing video games with adventure elements, set in the fictional Alola region (loosely based on Hawaii), presented in a third-person, overhead perspective.',
      reviews: sniperKiller[0]._id
    },
    {
      title: 'Pokemon Sword',
      release_date: 'November 15, 2019',
      image: 'https://i.imgur.com/QfstbbF.jpg',
      details:
        'Pokémon Sword and Shield are role-playing video games with adventure elements and in most cases are presented in a fixed camera, third-person perspective; in certain instances free camera movement is available',
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
