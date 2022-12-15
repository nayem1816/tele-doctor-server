const mongoose = require('mongoose');

const QuesAndAnsSchema = new mongoose.Schema(
    {
        question: { type: String, required: true },
        answer: { type: String, required: true },
        createdAt: { type: String, default: Date.now },
    },
    { versionKey: false }
);

const QuesAndAnsModel = mongoose.model('questionanswer', QuesAndAnsSchema);

module.exports = QuesAndAnsModel;
