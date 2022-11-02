const mongoose = require('mongoose');

const DataSchema = mongoose.Schema(
    {
        category: { type: String },
        title: { type: String },
        description: { type: String },
        image: { type: String },
        category: { type: String },
        createdAt: { type: String },
        updatedAt: { type: String },
    },
    { versionKey: false }
);
