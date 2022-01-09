const mysql = require('mysql2');
const fs = require('fs');
const config = require('../config/config');

const client = mysql.createConnection(config.mysqlConfig);

function connect() {
  return new Promise((res, rej) => {
    client.connect((err) => {
      if (err) {
        rej(err);
      }
      res();
    });
  });
}

module.exports = { connect, client };
