const mongoose = require('mongoose');

const AdminSchema = mongoose.Schema(
    {
        email: { type: String, required: true, unique: true },
        role: { type: String, required: true },
        createAt: { type: Date, required: Date.now() },
    },
    {
        versionKey: false,
    }
);

const adminModel = mongoose.model('admins', AdminSchema);

module.exports = adminModel;
