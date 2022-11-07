const CategoriesModel = require('../models/CategoriesModel');

exports.CreateCategory = (req, res) => {
    let reqBody = req.body;

    const categoryData = {
        name: reqBody.category,
    };

    CategoriesModel.create(categoryData, (err, data) => {
        if (err) {
            res.status(400).json({ status: 'fail', data: err });
        } else {
            res.status(200).json({ status: 'success', data: data });
        }
    });
};

exports.ReadCategories = (req, res) => {
    CategoriesModel.find({}, (err, data) => {
        if (err) {
            res.status(400).json({ status: 'fail', data: err });
        } else {
            res.status(200).json({ status: 'success', data: data });
        }
    });
};

exports.DeleteCategory = (req, res) => {
    CategoriesModel.findByIdAndDelete(req.body.id, (err, data) => {
        if (err) {
            res.status(400).json({ status: 'fail', data: err });
        } else {
            res.status(200).json({ status: 'success', data: data });
        }
    });
};
