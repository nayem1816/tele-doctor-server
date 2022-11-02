const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema(
    {
        name: { type: String },
        email: { type: String, unique: true },
        phone: { type: String },
        image: { type: String },
        address: { type: String },
        experience: { type: String },
        rating: { type: String },
        totalReview: { type: String },
        totalPatient: { type: String },
        // verifiedStatus: { type: String },
    },
    { versionKey: false }
);

const NurseModel = mongoose.model('nurses', DataSchema);

module.exports = NurseModel;
