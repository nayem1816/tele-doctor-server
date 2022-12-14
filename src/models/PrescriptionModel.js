const mongoose = require('mongoose');

const PrescriptionSchema = mongoose.Schema(
    {
        medicineName: { type: String, required: true },
        symptoms: { type: String },
        test: { type: String },
        advice: { type: String },
        appointmentId: { type: String, required: true },
        createdAt: { type: String, required: true },
        appointment: { type: Object, required: true },
    },
    { versionKey: false }
);

const PrescriptionModel = mongoose.model('prescriptions', PrescriptionSchema);

module.exports = PrescriptionModel;
