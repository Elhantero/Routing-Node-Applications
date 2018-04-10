const express = require('express');
const router = express.Router();
const path = require('path');
const siteController = require('./controllers/site.controller.js'); 
const dashboardController = require('./controllers/dashboard.controller.js');

// export the router
module.exports = router;

// site routes ====================================================
router.get('/',         siteController.showHome);
router.get('/about',    siteController.showAbout);
router.get('/contact',  siteController.showContact);
router.post('/contact', siteController.processContact);
router.get('/:username/:post_slug', siteController.showProfile);

// dashboard routes ================================================
router.get('/dashboard', dashboardController.showDashboard);

// 404 =============================================================
router.use(siteController.show404);