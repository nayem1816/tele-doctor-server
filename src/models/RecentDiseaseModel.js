const mongoose = require('mongoose');

const DataSchema = mongoose.Schema(
    {
        diseaseName: { type: String },
        specialization: { type: String },
        bannerImg: { type: String },
        bannerHeading: { type: String },
        bannerText: { type: String },
    },
    { versionKey: false }
);

const RecentDiseaseModel = mongoose.model('recentDiseases', DataSchema);

module.exports = RecentDiseaseModel;
