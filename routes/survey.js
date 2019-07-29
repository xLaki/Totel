const express = require('express');
const router  = express.Router();
const todoController = require('../controllers/survey');

// ############### ROUTES ##############

// Get for tasks: returns all tasks
router.get( '/survey', todoController.surveyDisplay );

router.post( '/survey', todoController.surveyRes);

router.get('/destination', todoController.final)

router.get('/destination/:id', todoController.final)

router.get('/vacation', todoController.vacation)

router.post('/vacation', todoController.final)

module.exports = router;
