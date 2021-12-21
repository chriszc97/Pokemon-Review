const { Router } = require('express');
const controller = require('../controllers/Controller.js');
const reviewController = require('../controllers/reviewController');

const router = Router();

router.get('/', (req, res) => res.send('The Root, router/index.js'));
router.get('/getallgames', controller.getAllGames);

router.post('/creategame', controller.createGame);

router.get('/getgamebyid/:id', controller.getGameById);

module.exports = router;
