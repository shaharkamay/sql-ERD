const express = require('express');
const {
  getClassById,
  addNewClass,
  updateClassId,
} = require('../controllers/class');

const router = express.Router();

router.get('/:id', getClassById);
router.post('/', addNewClass);
router.put('/', updateClassId);

module.exports = router;
