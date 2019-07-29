const express = require('express');
const router  = express.Router();
const homeController = require('../controllers/home')


router.get('/home', homeController.home)

router.get('/', homeController.database)

// router.get('/destination', homeController.dest)

module.exports = router