const express = require('express');
const getSubjectById = require('../controllers/subject');

const router = express.Router();

router.get('/:id', getSubjectById);

module.exports = router;
