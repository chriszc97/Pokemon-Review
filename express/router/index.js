const { Router } = require('express');
const controller = require('../controllers/Controller.js');
const reviewController = require('../controllers/reviewController');

const router = Router();

router.get('/', (req, res) => res.send('The Root, router/index.js'));
// controllers for games
router.get('/getallgames', controller.getAllGames);

router.post('/creategame', controller.createGame);

router.get('/getgamebyid/:id', controller.getGameById);
//controllers for reviews

router.post('/createreview', reviewController.createReview);
router.get('/getallreviews', reviewController.getAllReviews);
router.get('/getreviewbyid/:id', reviewController.getreviewbyid);
router.delete('/deletereview/:id', reviewController.deleteReview);

module.exports = router;
