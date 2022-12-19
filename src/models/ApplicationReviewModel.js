const mongoose = require('mongoose');

const ApplicationReviewSchema = mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true },
        review: { type: String, required: true },
        rating: { type: Number, required: true },
        userImg: { type: String, required: true },
        createdAt: { type: String, required: true },
    },
    { versionKey: false }
);

const ApplicationReviewModel = mongoose.model(
    'applicationReviews',
    ApplicationReviewSchema
);

module.exports = ApplicationReviewModel;
