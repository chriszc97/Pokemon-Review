const { Router } = require('express');
const controller = require('../controllers/Controller.js');

const router = Router();

router.get('/', (req, res) => res.send('The Root, router/index.js'));
router.get('/getallgames', controller.getAllGames);

router.post('/creategame', controller.createGame);

module.exports = router;
