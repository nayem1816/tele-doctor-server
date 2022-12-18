const AdminModel = require('../models/AdminModel');

exports.CreateAdmin = (req, res) => {
    let email = req.body.email;
    const adminData = {
        email: email,
        role: 'admin',
        createAt: Date.now(),
    };

    AdminModel.create(adminData, (err, data) => {
        if (err) {
            res.status(400).json({ status: 'fail', data: err });
        } else {
            res.status(200).json({ status: 'success', data: data });
        }
    });
};

exports.ReadAdmins = (req, res) => {
    AdminModel.find({}, (err, data) => {
        if (err) {
            res.status(400).json({ status: 'fail', data: err });
        } else {
            res.status(200).json({ status: 'success', data: data });
        }
    });
};
