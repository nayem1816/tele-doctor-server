const express = require('express');
const AuthVerifyMiddleware = require('../middleware/AuthVerifyMiddleware');
const ProfileController = require('../controllers/ProfileController');
const DoctorController = require('../controllers/DoctorController');
const NurseController = require('../controllers/NurseController');
const RecentDiseaseController = require('../controllers/RecentDiseasesController');

const router = express.Router();

// PROFILE ROUTES--------------------------------------------------------
router.post('/CreateProfile', ProfileController.CreateProfile);
router.post('/UserLogin', ProfileController.UserLogin);
router.get('/ReadProfiles', ProfileController.ReadProfiles);

// DOCTOR ROUTES--------------------------------------------------------
router.post('/CreateDoctor', DoctorController.CreateDoctor);
router.get('/ReadDoctors', DoctorController.ReadDoctors);
router.post('/DeleteDoctor', DoctorController.DeleteDoctor);
router.get('/FindRecentDoctor', DoctorController.FindRecentDoctor);

// NURSE ROUTES--------------------------------------------------------
router.post('/CreateNurse', NurseController.CreateNurse);
router.get('/ReadNurses', NurseController.ReadNurses);
router.post('/UpdateNurse', NurseController.UpdateNurse);
router.post('/DeleteNurse', NurseController.DeleteNurse);

// RECENT DISEASES ROUTES------------------------------------------------
router.post(
    '/CreateRecentDisease',
    RecentDiseaseController.CreateRecentDisease
);
router.get('/ReadRecentDiseases', RecentDiseaseController.ReadRecentDiseases);
router.post(
    '/UpdateRecentDisease',
    RecentDiseaseController.UpdateRecentDisease
);
router.post(
    '/DeleteRecentDisease',
    RecentDiseaseController.DeleteRecentDisease
);

module.exports = router;
