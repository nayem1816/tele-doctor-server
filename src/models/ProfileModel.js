const mongoose = require('mongoose');
const DataSchema = mongoose.Schema(
    {
        Name: { type: String, required: true },
        EmailAddress: { type: String, required: true, unique: true },
        MobileNumber: { type: String, min: 11, max: 14, default: null },
        ProfilePic: { type: String, default: null },
        Address: { type: String, default: null },
        DateOfBirth: { type: String, default: null },
        Gender: { type: String, default: null },
        role: { type: String, default: 'user' },
        admin: { type: String, default: '' },
    },
    { versionKey: false }
);
const ProfileModel = mongoose.model('profiles', DataSchema);
module.exports = ProfileModel;
