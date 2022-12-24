const SocialMediaPageModel = require('../models/SocialMediaPageModel');

exports.CreatePage = (req, res) => {
    const page = {
        pageName: req.body.pageName,
        pageImage: req.body?.pageImage,
        pageAdmin: req.body.pageAdmin,
        pageAdminEmail: req.body.pageAdminEmail,
        pageAdminImage: req.body.pageAdminImage,
    };

    SocialMediaPageModel.create(page, (err, data) => {
        if (err) {
            res.status(400).json({ status: 'fail', data: err });
        } else {
            res.status(200).json({ status: 'success', data: data });
        }
    });
};

exports.ReadPages = (req, res) => {
    SocialMediaPageModel.find({}, (err, data) => {
        if (err) {
            res.status(400).json({ status: 'fail', data: err });
        } else {
            res.status(200).json({ status: 'success', data: data });
        }
    });
};

exports.ReadPageByEmail = (req, res) => {
    SocialMediaPageModel.find(
        { pageAdminEmail: req.params.email },
        (err, data) => {
            if (err) {
                res.status(400).json({ status: 'fail', data: err });
            } else {
                res.status(200).json({ status: 'success', data: data });
            }
        }
    );
};
