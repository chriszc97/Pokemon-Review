const { Review } = require('../models/index');

const createReview = async (req, res) => {
  console.log(req.body);
  try {
    const review = await Review.create(req.body);
    console.log(review);
    await review.save();
    return res.status(201).json({ review });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
const getAllReviews = async (req, res) => {
  try {
    const review = await Review.find();
    return res.status(200).json({ review });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
const getreviewbyid = async (req, res) => {
  try {
    const { id } = req.params;
    const review = await Review.findById(id);
    if (review) {
      return res.status(200).json({ review });
    }
    return res.status(404).send('This review does not exist');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
const deleteReview = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Review.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send('Review deleted');
    }
    throw new Error('Reviews not found');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const updateReview = async (req, res) => {
  try {
    const { id } = req.params;
    await Review.findByIdAndUpdate(id, req.body, { new: true }, (err, rev) => {
      if (err) {
        res.status(500).send(err);
      }
      if (!rev) {
      }
      return res.status(200).json(rev);
    });
  } catch (error) {}
};

module.exports = {
  createReview,
  getAllReviews,
  getreviewbyid,
  deleteReview,
  updateReview
};
