const express = require('express')
const {getAllUsers, createAUser} = require('../controllers/userController');
const router = express.Router()


router.get('/',getAllUsers);
router.post('/',createAUser);

module.exports = router