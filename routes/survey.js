const express = require('express');
const router  = express.Router();
const todoController = require('../controllers/survey');

// ############### ROUTES ##############

// Gets the survey
router.get( '/survey', todoController.surveyDisplay );

// Posts the response
router.post( '/survey', todoController.surveyRes)

module.exports = router;
