const DoctorBookingModel = require('../models/DoctorBookingModel');

exports.CreateAppointment = (req, res) => {
    let reqBody = req.body;

    DoctorBookingModel.create(reqBody, (err, data) => {
        if (err) {
            res.status(400).json({ status: 'fail', data: err });
        } else {
            res.status(200).json({ status: 'success', data: data });
        }
    });
};

exports.ReadAppointments = (req, res) => {
    DoctorBookingModel.find({}, (err, data) => {
        if (err) {
            res.status(400).json({ status: 'fail', data: err });
        } else {
            res.status(200).json({ status: 'success', data: data });
        }
    });
};

exports.DeleteAppointment = (req, res) => {
    DoctorBookingModel.findByIdAndDelete(req.body.id, (err, data) => {
        if (err) {
            res.status(400).json({ status: 'fail', data: err });
        } else {
            res.status(200).json({ status: 'success', data: data });
        }
    });
};

exports.SentAppointmentMessage = (req, res) => {
    let reqBody = req.body;
    let date =
        new Date().getFullYear() +
        '-' +
        (new Date().getMonth() + 1) +
        '-' +
        new Date().getDate();
    let time =
        new Date().getHours() +
        ':' +
        new Date().getMinutes() +
        ':' +
        new Date().getSeconds();

    let message = {
        message: reqBody.message,
        date: date,
        time: time,
        sender: reqBody.sender,
    };

    DoctorBookingModel.findByIdAndUpdate(
        reqBody.appointmentId,
        { $push: { message: message } },
        (err, data) => {
            if (err) {
                res.status(400).json({ status: 'fail', data: err });
            } else {
                res.status(200).json({ status: 'success', data: data });
            }
        }
    );
};

exports.ReadAppointmentByEmail = (req, res) => {
    const reqEmail = req.params.email;
    DoctorBookingModel.find({ userEmail: reqEmail }, (err, data) => {
        if (err) {
            res.status(400).json({ status: 'fail', data: err });
        } else {
            res.status(200).json({ status: 'success', data: data });
        }
    });
};

exports.ReadAppointmentById = (req, res) => {
    DoctorBookingModel.findById(req.params.id, (err, data) => {
        if (err) {
            res.status(400).json({ status: 'fail', data: err });
        } else {
            res.status(200).json({ status: 'success', data: data });
        }
    });
};

exports.ReadAppointmentDoctorByEmail = (req, res) => {
    const reqEmail = req.params.email;
    DoctorBookingModel.find({ doctorEmail: reqEmail }, (err, data) => {
        if (err) {
            res.status(400).json({ status: 'fail', data: err });
        } else {
            res.status(200).json({ status: 'success', data: data });
        }
    });
};
