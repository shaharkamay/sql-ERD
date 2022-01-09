const express = require('express');
const getClassById = require('../controllers/class');

const router = express.Router();

router.get('/:id', getClassById);

module.exports = router;
