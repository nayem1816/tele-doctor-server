const mongoose = require('mongoose');

const DoctorSchema = mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        mobile: { type: String, required: true, unique: true },
        profilePic: {
            type: String,
            default:
                'https://i.ibb.co/stpv40P/male-doctor-28eb7b29c762923c6696.png',
        },
        DOB: { type: String, required: true },
        gender: { type: String, required: true },
        address: { type: Array, required: true },
        specialization: { type: String, required: true },
        profileDesc: { type: String, default: '' },
        education: { type: String, default: '' },
        experience: { type: String, default: '' },
        registrationNumber: { type: String, required: true, unique: true },
        fees: { type: String, required: true },
        workingAt: { type: String },
        communication: { type: Array, required: true },
        verifiedStatus: { type: String, default: '' },
        createdAt: { type: String, required: true },
        availableDays: {
            type: Array,
            default: [
                'Saturday',
                'Sunday',
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
            ],
        },
        availableTime: { type: String, default: '24 hours' },
        activeStatus: { type: String, default: '' },
        rating: { type: Number, default: null },
        totalReview: { type: Number, default: null },
        totalPatient: { type: Number, default: null },
    },
    { versionKey: false }
);

const DoctorModel = mongoose.model('doctors', DoctorSchema);
module.exports = DoctorModel;
