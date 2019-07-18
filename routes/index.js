// this is my route manager 
const express = require('express');
const survey    = require('./survey');
const user    = require('./user');
const home    = require('./home')

const router  = express.Router();


router.use(survey);
router.use(user);
router.use(home);

module.exports = router;