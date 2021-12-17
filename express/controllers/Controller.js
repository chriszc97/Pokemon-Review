const Game = require('../models/game');

const createGame = async (req, res) => {
  try {
    const game = await Game.create(req.body);
    await game.save();
    return res.status(201).json({ game });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
// const getAllGames = async (req, res) => {
//   try {
//     const games = await Game.find();
//     return res.status(200).json({ games });
//   } catch (error) {
//     return res.status(500).send(error.message);
//   }
// };

const getAllGames = async (req, res) => {
  try {
    const games = await Game.find();
    return res.status(200).json({ games });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  createGame,
  getAllGames
};
