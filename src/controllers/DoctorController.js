const DoctorModel = require('../models/DoctorModel');

exports.CreateDoctor = (req, res) => {
    let reqBody = req.body;
    const verifiedStatus = 'not-verified';
    const activeStatus = 'not-active';
    const rating = null;
    const totalReview = null;
    const totalPatient = null;

    const doctorData = {
        name: reqBody.name,
        email: reqBody.email,
        mobile: reqBody.mobile,
        profilePic: reqBody.profilePic,
        DOB: reqBody.DOB,
        gender: reqBody.gender,
        address: reqBody.address,
        specialization: reqBody.specialization,
        profileDesc: reqBody.profileDesc,
        education: reqBody.education,
        experience: reqBody.experience,
        registrationNumber: reqBody.registrationNumber,
        fees: reqBody.fees,
        communication: reqBody.communication,
        verifiedStatus: verifiedStatus,
        createdAt: reqBody.createdAt,
        availableDays: reqBody.availableDays,
        consultationTime: reqBody.consultationTime,
        activeStatus: activeStatus,
        rating: rating,
        totalReview: totalReview,
        totalPatient: totalPatient,
    };

    console.log(doctorData);

    DoctorModel.create(doctorData, (err, data) => {
        if (err) {
            res.status(400).json({ status: 'fail', data: err });
        } else {
            res.status(200).json({ status: 'success', data: data });
        }
    });
};

exports.ReadDoctors = (req, res) => {
    DoctorModel.find({}, (err, data) => {
        if (err) {
            res.status(400).json({ status: 'fail', data: err });
        } else {
            res.status(200).json({ status: 'success', data: data });
        }
    });
};