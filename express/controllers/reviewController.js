const { Review } = require('../models.index');

const createReview = async (req, res) => {
  try {
    const review = await Review.create(req.body);
    await review.save();
    return res.status(201).json({ review });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createReveiw
};
