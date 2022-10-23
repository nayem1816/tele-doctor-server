const express = require('express');
const AuthVerifyMiddleware = require('../middleware/AuthVerifyMiddleware');
const ProfileController = require('../controllers/ProfileController');
const DoctorController = require('../controllers/DoctorController');

const router = express.Router();

// profile routes
router.post('/CreateProfile', ProfileController.CreateProfile);
router.post('/UserLogin', ProfileController.UserLogin);
router.get('/ReadProfiles', ProfileController.ReadProfiles);

// doctor routes
router.post('/CreateDoctor', DoctorController.CreateDoctor, (req, res) => {
    if (req.body) {
        res.status(200).json({ status: 'success', data: req.body });
    } else {
        res.status(400).json({ status: 'fail', data: req.body });
    }
});

module.exports = router;
