const mongoose = require('mongoose');
const DataSchema = mongoose.Schema(
    {
        FirstName: { type: String },
        LastName: { type: String },
        EmailAddress: { type: String },
        MobileNumber: { type: String },
        City: { type: String },
        UserName: { type: String, unique: true },
        Password: { type: String },
    },
    { versionKey: false }
);
const PatientProfileModel = mongoose.model('patientProfiles', DataSchema);
module.exports = PatientProfileModel;
