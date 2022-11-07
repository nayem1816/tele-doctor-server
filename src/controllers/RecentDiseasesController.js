const RecentDiseaseModel = require('../models/RecentDiseaseModel');

exports.CreateRecentDisease = (req, res) => {
    let reqBody = req.body;

    RecentDiseaseModel.create(reqBody, (err, data) => {
        if (err) {
            res.status(400).json({ status: 'fail', data: err });
        } else {
            res.status(200).json({ status: 'success', data: data });
        }
    });
};

exports.ReadRecentDiseases = (req, res) => {
    RecentDiseaseModel.find({}, (err, data) => {
        if (err) {
            res.status(400).json({ status: 'fail', data: err });
        } else {
            res.status(200).json({ status: 'success', data: data });
        }
    });
};

exports.UpdateRecentDisease = (req, res) => {
    let reqBody = req.body;

    RecentDiseaseModel.findByIdAndUpdate(
        reqBody._id,
        reqBody,
        { new: true },
        (err, data) => {
            if (err) {
                res.status(400).json({ status: 'fail', data: err });
            } else {
                res.status(200).json({ status: 'success', data: data });
            }
        }
    );
};

exports.DeleteRecentDisease = (req, res) => {
    let reqBody = req.body;

    RecentDiseaseModel.findByIdAndDelete(reqBody.id, (err, data) => {
        if (err) {
            res.status(400).json({ status: 'fail', data: err });
        } else {
            res.status(200).json({ status: 'success', data: data });
        }
    });
};
