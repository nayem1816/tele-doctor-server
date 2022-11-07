const BlogModel = require('../models/BlogModel');

exports.CreateBlog = (req, res) => {
    let reqBody = req.body;

    let startDate = new Date();

    const blogData = {
        category: reqBody.category,
        title: reqBody.title,
        description: reqBody.description,
        image: reqBody.image,
        createdAt: startDate,
        updatedAt: startDate,
    };

    BlogModel.create(blogData, (err, data) => {
        if (err) {
            res.status(400).json({ status: 'fail', data: err });
        } else {
            res.status(200).json({ status: 'success', data: data });
        }
    });
};

exports.ReadBlogs = (req, res) => {
    BlogModel.find({}, (err, data) => {
        if (err) {
            res.status(400).json({ status: 'fail', data: err });
        } else {
            res.status(200).json({ status: 'success', data: data });
        }
    });
};

exports.DeleteBlog = (req, res) => {
    BlogModel.findByIdAndDelete(req.body.id, (err, data) => {
        if (err) {
            res.status(400).json({ status: 'fail', data: err });
        } else {
            res.status(200).json({ status: 'success', data: data });
        }
    });
};

exports.UpdateBlog = (req, res) => {
    let reqBody = req.body;

    BlogModel.findByIdAndUpdate(reqBody.id, reqBody, (err, data) => {
        if (err) {
            res.status(400).json({ status: 'fail', data: err });
        } else {
            res.status(200).json({ status: 'success', data: data });
        }
    });
};
