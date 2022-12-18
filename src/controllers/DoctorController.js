const DoctorModel = require('../models/DoctorModel');

exports.CreateDoctor = (req, res) => {
    let reqBody = req.body;
    const verifiedStatus = 'not-verified';

    const active = ['active', 'not-active'];
    let randActive = active[(Math.random() * active.length) | 0];

    const ratings = Math.floor(Math.random() * 5);

    const reviews = Math.floor(Math.random() * 1000);

    const patients = Math.floor(Math.random() * 100);

    const doctorData = {
        name: reqBody.name,
        email: reqBody.email,
        mobile: reqBody.mobile,
        profilePic: reqBody.profilePic,
        DOB: reqBody.DOB,
        gender: reqBody.gender,
        district: reqBody.district,
        address: reqBody.address,
        specialization: reqBody.specialization,
        profileDesc: reqBody.profileDesc,
        education: reqBody.education,
        experience: reqBody.experience,
        registrationNumber: reqBody.registrationNumber,
        fees: reqBody.fees,
        workingAt: reqBody.workingAt,
        communication: reqBody.communication,
        verifiedStatus: verifiedStatus,
        createdAt: reqBody.createdAt,
        availableDays: reqBody.availableDays,
        consultationTime: reqBody.consultationTime,
        activeStatus: randActive,
        rating: ratings,
        totalReview: reviews,
        totalPatient: patients,
        userInfo: reqBody.userInfo,
    };

    DoctorModel.create(doctorData, (err, data) => {
        if (err) {
            res.status(400).json({ status: 'fail', data: err });
        } else {
            res.status(200).json({ status: 'success', data: data });
        }
    });
};

exports.ReadDoctors = (req, res) => {
    DoctorModel.find({ verifiedStatus: 'verified' }, (err, data) => {
        if (err) {
            res.status(400).json({ status: 'fail', data: err });
        } else {
            res.status(200).json({ status: 'success', data: data });
        }
    });
};

exports.DeleteDoctor = (req, res) => {
    DoctorModel.findByIdAndDelete(req.body.id, (err, data) => {
        if (err) {
            res.status(400).json({ status: 'fail', data: err });
        } else {
            res.status(200).json({ status: 'success', data: data });
        }
    });
};

exports.FindRecentDoctor = (req, res) => {
    const specialization = req.query.specialist;

    DoctorModel.find({ specialization: specialization }, (err, data) => {
        if (err) {
            res.status(400).json({ status: 'fail', data: err });
        } else {
            res.status(200).json({ status: 'success', data: data });
        }
    });
};

exports.ReadDoctorById = (req, res) => {
    const id = req.params.id;

    DoctorModel.findById(id, (err, data) => {
        if (err) {
            res.status(400).json({ status: 'fail', data: err });
        } else {
            res.status(200).json({ status: 'success', data: data });
        }
    });
};

exports.updateVerifiedStatus = (req, res) => {
    const id = req.body.id;

    DoctorModel.findByIdAndUpdate(
        id,
        { verifiedStatus: req.body.verifiedStatus },
        (err, data) => {
            if (err) {
                res.status(400).json({ status: 'fail', data: err });
            } else {
                res.status(200).json({ status: 'success', data: data });
            }
        }
    );
};

exports.VerifiedDoctors = (req, res) => {
    DoctorModel.find({ verifiedStatus: 'verified' }, (err, data) => {
        if (err) {
            res.status(400).json({ status: 'fail', data: err });
        } else {
            res.status(200).json({ status: 'success', data: data });
        }
    });
};

exports.NotVerifiedDoctors = (req, res) => {
    DoctorModel.find({ verifiedStatus: 'not-verified' }, (err, data) => {
        if (err) {
            res.status(400).json({ status: 'fail', data: err });
        } else {
            res.status(200).json({ status: 'success', data: data });
        }
    });
};

exports.FindDoctorByLocation = (req, res) => {
    const location = req.query.location;

    DoctorModel.find({ district: location }, (err, data) => {
        if (err) {
            res.status(400).json({ status: 'fail', data: err });
        } else {
            res.status(200).json({ status: 'success', data: data });
        }
    });
};

exports.AvailableDoctor = (req, res) => {
    DoctorModel.find({ activeStatus: 'active' }, (err, data) => {
        if (err) {
            res.status(400).json({ status: 'fail', data: err });
        } else {
            res.status(200).json({ status: 'success', data: data });
        }
    });
};
