const express = require('express');
const AuthVerifyMiddleware = require('../middleware/AuthVerifyMiddleware');
const ProfileController = require('../controllers/ProfileController');
const DoctorController = require('../controllers/DoctorController');
const NurseController = require('../controllers/NurseController');
const CategoriesController = require('../controllers/CategoriesController');
const RecentDiseaseController = require('../controllers/RecentDiseasesController');
const BlogController = require('../controllers/BlogController');

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
router.get('/ReadDoctorById/:id', DoctorController.ReadDoctorById);

// NURSE ROUTES--------------------------------------------------------
router.post('/CreateNurse', NurseController.CreateNurse);
router.get('/ReadNurses', NurseController.ReadNurses);
router.post('/UpdateNurse', NurseController.UpdateNurse);
router.post('/DeleteNurse', NurseController.DeleteNurse);
router.get('/ReadNurseById/:id', NurseController.ReadNurseById);

// Category ROUTES--------------------------------------------------------
router.post('/CreateCategory', CategoriesController.CreateCategory);
router.get('/ReadCategories', CategoriesController.ReadCategories);
router.post('/DeleteCategory', CategoriesController.DeleteCategory);

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

// BLOG ROUTES------------------------------------------------------------
router.post('/CreateBlog', BlogController.CreateBlog);
router.get('/ReadBlogs', BlogController.ReadBlogs);
router.post('/UpdateBlog', BlogController.UpdateBlog);
router.post('/DeleteBlog', BlogController.DeleteBlog);

module.exports = router;
