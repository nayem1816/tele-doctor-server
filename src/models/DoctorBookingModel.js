const mongoose = require('mongoose');

const DoctorBookingSchema = mongoose.Schema(
    {
        paymentInfo: { type: Object },
        userName: { type: String },
        userEmail: { type: String },
        doctorId: { type: String, required: true },
        doctorName: { type: String, required: true },
        doctorEmail: { type: String, required: true },
        doctorPhone: { type: String, required: true },
        doctorFee: { type: Number, required: true },
        doctorProfilePic: { type: String, required: true },
        appointmentDate: { type: String, required: true },
        patientName: { type: String, required: true },
        patientEmail: { type: String, required: true },
        patientPhone: { type: String, required: true },
        patientAge: { type: Number, required: true },
        patientGender: { type: String, required: true },
        patientDateOfBirth: { type: String, required: true },
        message: { type: Array },
    },
    { versionKey: false }
);

const DoctorBookingModel = mongoose.model('appointments', DoctorBookingSchema);

module.exports = DoctorBookingModel;
