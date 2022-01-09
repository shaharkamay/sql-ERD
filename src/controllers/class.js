const { client } = require('../db');

const getClassById = (req, res, next) => {
  try {
    const { id } = req.params;
    const sql = `SELECT class_id, name AS Students
    FROM student
      WHERE class_id=${id}
      GROUP BY Students`;
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

module.exports = getClassById;
