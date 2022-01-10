const { client } = require('../db');

const getStudentById = (req, res, next) => {
  try {
    const { id } = req.params;
    const sql = `SELECT * FROM student WHERE id=${id}`;
    client.query(sql, function (err, result, fields) {
      console.log(result);
      if (err) {
        throw err;
      }
      res.json(result);
    });
  } catch (error) {
    console.log(error);
  }
};

const addNewStudent = (req, res, next) => {
  try {
    const { name, class_id } = req.body;
    const sql = `Insert INTO student (name, class_id) VALUES ("${name}" , ${class_id})`;
    client.query(sql, (err, result, fields) => {
      if (err) throw err;
      res.json(result);
    });
  } catch (err) {
    console.log(err);
  }
};

const deleteStudent = (req, res, next) => {
  try {
    const { student_id } = req.body;
    const sql = `DELETE FROM student WHERE id = ${student_id}`;
    client.query(sql, (err, result, fields) => {
      if (err) throw err;
      res.json(result);
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = { getStudentById, addNewStudent, deleteStudent };
