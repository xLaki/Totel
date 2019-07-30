const express = require('express');
const router  = express.Router();
const surveyController = require('../controllers/survey');

// ############### ROUTES ##############

// Gets the survey
router.get( '/survey', surveyController.surveyDisplay );

router.post( '/survey', surveyController.surveyRes);

// router.get('/destination', surveyController.final)

router.get('/destination/:id', surveyController.destination)

// router.get('/vacation', surveyController.vacation)

router.post('/vacation', surveyController.final)

module.exports = router;
