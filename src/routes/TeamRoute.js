const express = require('express');
const router = express.Router();
const teamcontroller = require('../controllers/team.controller');

router.get('/', teamcontroller.getTeam);
router.get('/teams', teamcontroller.getAllTeam);
router.post('/', teamcontroller.createTeam);

module.exports = router;
