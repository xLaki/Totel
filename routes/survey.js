const express = require('express');
const router  = express.Router();
const todoController = require('../controllers/survey');

// ############### ROUTES ##############

// Get for tasks: returns all tasks
router.get( '/survey', todoController.surveyRes );


module.exports = router;
