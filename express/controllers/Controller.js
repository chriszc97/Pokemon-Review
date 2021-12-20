const { Game } = require('../models/index');

const createGame = async (req, res) => {
  try {
    const game = await Game.create(req.body);
    await game.save();
    return res.status(201).json({ game });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
const getAllGames = async (req, res) => {
  try {
    const games = await Game.find();
    return res.status(200).json({ games });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
const getGameById = async (req, res) => {
  try {
    const { id } = req.params;
    const game = await Game.findById(id);
    if (game) {
      return res.status(200).json({ game });
    }
    return res.status(404).send('This game does not exist');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  createGame,
  getAllGames,
  getGameById
};
