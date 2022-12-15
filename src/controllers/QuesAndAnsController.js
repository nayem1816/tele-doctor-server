const QuesAndAnsModel = require('../models/QuesAndAnsModel');

exports.CreateQuesAndAns = (req, res) => {
    let reqBody = req.body;

    const quesAndAnsData = {
        question: reqBody.question,
        answer: reqBody.answer,
        createdAt: Date.now(),
    };

    QuesAndAnsModel.create(quesAndAnsData, (err, data) => {
        if (err) {
            res.status(400).json({ status: 'fail', data: err });
        } else {
            res.status(200).json({ status: 'success', data: data });
        }
    });
};

exports.ReadQuesAndAns = (req, res) => {
    QuesAndAnsModel.find({}, (err, data) => {
        if (err) {
            res.status(400).json({ status: 'fail', data: err });
        } else {
            res.status(200).json({ status: 'success', data: data });
        }
    });
};

exports.DeleteQuesAndAns = (req, res) => {
    QuesAndAnsModel.findByIdAndDelete(req.body.id, (err, data) => {
        if (err) {
            res.status(400).json({ status: 'fail', data: err });
        } else {
            res.status(200).json({ status: 'success', data: data });
        }
    });
};

exports.ReadQuesAndAnsById = (req, res) => {
    QuesAndAnsModel.findById(req.params.id, (err, data) => {
        if (err) {
            res.status(400).json({ status: 'fail', data: err });
        } else {
            res.status(200).json({ status: 'success', data: data });
        }
    });
};
