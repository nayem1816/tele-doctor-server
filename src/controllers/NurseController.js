const NurseModel = require('../models/NurseModel');

exports.CreateNurse = (req, res) => {
    let reqBody = req.body;
    // const verifiedStatus = 'not-verified';
    const rating = null;
    const totalReview = null;
    const totalPatient = null;

    const nurseData = {
        name: reqBody.name,
        email: reqBody.email,
        phone: reqBody.phone,
        image: reqBody.image,
        address: reqBody.address,
        experience: reqBody.experience,
        rating: rating,
        totalReview: totalReview,
        totalPatient: totalPatient,
        // verifiedStatus: verifiedStatus,
    };

    NurseModel.create(nurseData, (err, data) => {
        if (err) {
            res.status(400).json({ status: 'fail', data: err });
        } else {
            res.status(200).json({ status: 'success', data: data });
        }
    });
};

exports.ReadNurses = (req, res) => {
    NurseModel.find({}, (err, data) => {
        if (err) {
            res.status(400).json({ status: 'fail', data: err });
        } else {
            res.status(200).json({ status: 'success', data: data });
        }
    });
};

exports.UpdateNurse = (req, res) => {
    let reqBody = req.body;

    NurseModel.findByIdAndUpdate(reqBody.id, reqBody, (err, data) => {
        if (err) {
            res.status(400).json({ status: 'fail', data: err });
        } else {
            res.status(200).json({ status: 'success', data: data });
        }
    });
};

exports.DeleteNurse = (req, res) => {
    NurseModel.findByIdAndDelete(req.body.id, (err, data) => {
        if (err) {
            res.status(400).json({ status: 'fail', data: err });
        } else {
            res.status(200).json({ status: 'success', data: data });
        }
    });
};

exports.ReadNurseById = (req, res) => {
    const id = req.params.id;

    NurseModel.findById(req.params.id, (err, data) => {
        if (err) {
            res.status(400).json({ status: 'fail', data: err });
        } else {
            res.status(200).json({ status: 'success', data: data });
        }
    });
};
