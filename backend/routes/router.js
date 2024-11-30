const express = require('express');
const {registration, login, findUser} = require('../controls/authControl');

const router = express.Router();
router.post('/registration', registration);
router.post('/login', login);
router.get('/findUser/:userId', findUser);

module.exports = router;