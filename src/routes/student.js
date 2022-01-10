const express = require('express');
const {
  getStudentById,
  addNewStudent,
  deleteStudent,
} = require('../controllers/student');

const router = express.Router();

router.get('/:id', getStudentById);
router.post('/', addNewStudent);
router.delete('/', deleteStudent);

module.exports = router;
