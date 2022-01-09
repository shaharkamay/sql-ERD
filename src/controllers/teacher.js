const { client } = require('../db');

const getTeacherById = (req, res, next) => {
  try {
    const { id } = req.params;
    const sql = `SELECT * FROM teacher WHERE id=${id}`;
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

module.exports = getTeacherById;
