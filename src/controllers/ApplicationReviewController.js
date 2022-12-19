const ApplicationReviewModel = require('../models/ApplicationReviewModel');

exports.CreateApplicationReview = (req, res) => {
    const reviewData = {
        name: req.body.name,
        email: req.body.email,
        review: req.body.review,
        rating: req.body.rating,
        userImg: req.body.userImg,
        createdAt: req.body.createAt,
    };

    console.log(reviewData);

    ApplicationReviewModel.create(reviewData, (err, data) => {
        if (err) {
            res.status(400).json({ status: 'fail', data: err });
        } else {
            res.status(200).json({ status: 'success', data: data });
        }
    });
};

exports.ReadApplicationReviews = (req, res) => {
    ApplicationReviewModel.find({}, (err, data) => {
        if (err) {
            res.status(400).json({ status: 'fail', data: err });
        } else {
            res.status(200).json({ status: 'success', data: data });
        }
    });
};
