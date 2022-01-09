const config = {
  mysqlConfig: {
    host: 'mysql_server',
    user: process.env.MYSQL_USER || 'student',
    password: process.env.MYSQL_PASSWORD || 'secret',
    database: process.env.MYSQL_DATABASE || 'test_db',
  },
};

module.exports = config;
