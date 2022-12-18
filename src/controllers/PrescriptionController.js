const PrescriptionModel = require('../models/PrescriptionModel');

exports.CreatePrescription = (req, res) => {
    let reqBody = req.body;

    const prescriptionData = {
        medicineName: reqBody.medicineName,
        symptoms: reqBody.symptoms,
        test: reqBody.test,
        advice: reqBody.advice,
        appointmentId: reqBody.appointmentId,
        createdAt: reqBody.createdAt,
        appointment: reqBody.appointment,
    };

    PrescriptionModel.create(prescriptionData, (err, data) => {
        if (err) {
            res.status(400).json({ status: 'fail', data: err });
        } else {
            res.status(200).json({ status: 'success', data: data });
        }
    });
};

exports.ReadPrescriptions = (req, res) => {
    PrescriptionModel.find({}, (err, data) => {
        if (err) {
            res.status(400).json({ status: 'fail', data: err });
        } else {
            res.status(200).json({ status: 'success', data: data });
        }
    });
};

exports.DeletePrescription = (req, res) => {
    PrescriptionModel.findByIdAndDelete(req.body.id, (err, data) => {
        if (err) {
            res.status(400).json({ status: 'fail', data: err });
        } else {
            res.status(200).json({ status: 'success', data: data });
        }
    });
};

exports.ReadPrescriptionById = (req, res) => {
    PrescriptionModel.findById(req.params.id, (err, data) => {
        if (err) {
            res.status(400).json({ status: 'fail', data: err });
        } else {
            res.status(200).json({ status: 'success', data: data });
        }
    });
};

exports.ReadPrescriptionByEmail = (req, res) => {
    const email = req.params.email;
    PrescriptionModel.find({ 'appointment.userEmail': email }, (err, data) => {
        if (err) {
            res.status(400).json({ status: 'fail', data: err });
        } else {
            res.status(200).json({ status: 'success', data: data });
        }
    });
};
exports.ReadPrescriptionDoctorByEmail = (req, res) => {
    const email = req.params.email;
    PrescriptionModel.find(
        { 'appointment.doctorEmail': email },
        (err, data) => {
            if (err) {
                res.status(400).json({ status: 'fail', data: err });
            } else {
                res.status(200).json({ status: 'success', data: data });
            }
        }
    );
};
