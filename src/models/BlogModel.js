const mongoose = require('mongoose');

const DataSchema = mongoose.Schema(
    {
        category: { type: String },
        title: { type: String },
        description: { type: String },
        image: { type: String },
        createdAt: { type: Date, default: Date.now },
        updatedAt: { type: Date, default: Date.now },
    },
    { versionKey: false }
);

const BlogModel = mongoose.model('blogs', DataSchema);

module.exports = BlogModel;
