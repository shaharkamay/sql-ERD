const express = require('express');
const getStudentById = require('../controllers/student');

const router = express.Router();

router.get('/:id', getStudentById);

module.exports = router;
