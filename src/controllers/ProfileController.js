const ProfileModel = require('../models/ProfileModel');
const jwt = require('jsonwebtoken');
require('dotenv').config({ path: '../../config.env' });

exports.CreateProfile = (req, res) => {
    let reqBody = req.body;

    ProfileModel.create(reqBody, (err, data) => {
        if (err) {
            res.status(400).json({ status: 'fail', data: err });
        } else {
            res.status(200).json({ status: 'success', data: data });
        }
    });
};

exports.UserLogin = (req, res) => {
    let EmailAddress = req.body['EmailAddress'];

    ProfileModel.find({ EmailAddress: EmailAddress }, (err, data) => {
        if (err) {
            res.status(400).json({ status: 'fail', data: err });
        } else {
            if (data.length > 0) {
                const payload = {
                    exp: Math.floor(Date.now() / 1000) + 24 * 60 * 60,
                    data: data[0],
                };
                const token = jwt.sign(payload, process.env.SECRET_KEY_JWT);

                res.status(200).json({
                    status: 'success',
                    token,
                    data: data[0],
                });
            } else {
                res.status(401).json({ status: 'unauthorized', data: err });
            }
        }
    });
};

// read all profiles
exports.ReadProfiles = (req, res) => {
    ProfileModel.find({}, (err, data) => {
        if (err) {
            res.status(400).json({ status: 'fail', data: err });
        } else {
            res.status(200).json({ status: 'success', data: data });
        }
    });
};

exports.UpdateProfile = (req, res) => {
    const id = req.body.id;
    const data = {
        MobileNumber: req.body.phone,
        Address: req.body.address,
        DateOfBirth: req.body.dateOfBirth,
    };

    ProfileModel.findByIdAndUpdate(id, data, (err, data) => {
        if (err) {
            res.status(400).json({ status: 'fail', data: err });
        } else {
            res.status(200).json({ status: 'success', data: data });
        }
    });
};

// read profile by id
exports.ReadProfileByEmail = (req, res) => {
    let EmailAddress = req.params['email'];

    ProfileModel.find({ EmailAddress: EmailAddress }, (err, data) => {
        if (err) {
            res.status(400).json({ status: 'fail', data: err });
        } else {
            res.status(200).json({ status: 'success', data: data });
        }
    });
};

exports.UpdateRoleUsingEmail = (req, res) => {
    const EmailAddress = req.body.email;
    const role = req.body.role;

    ProfileModel.findOneAndUpdate(
        { EmailAddress: EmailAddress },
        { role: role },
        (err, data) => {
            if (err) {
                res.status(400).json({ status: 'fail', data: err });
            } else {
                res.status(200).json({ status: 'success', data: data });
            }
        }
    );
};

exports.CreateAdminUsingEmail = (req, res) => {
    const EmailAddress = req.body.email;
    const admin = 'admin';

    ProfileModel.findOneAndUpdate(
        { EmailAddress: EmailAddress },
        { admin: admin },
        (err, data) => {
            if (err) {
                res.status(400).json({ status: 'fail', data: err });
            } else {
                res.status(200).json({ status: 'success', data: data });
            }
        }
    );
};

exports.ReadAdmin = (req, res) => {
    ProfileModel.find({ admin: 'admin' }, (err, data) => {
        if (err) {
            res.status(400).json({ status: 'fail', data: err });
        } else {
            res.status(200).json({ status: 'success', data: data });
        }
    });
};
