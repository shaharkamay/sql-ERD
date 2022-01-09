const express = require('express');
const getTeacherById = require('../controllers/teacher');

const router = express.Router();

router.get('/:id', getTeacherById);

module.exports = router;
