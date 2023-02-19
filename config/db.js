
const mysql = require('mysql');
const { config } = require('./config') ;
const USER = encodeURIComponent(config.user);
const PASSWORD = encodeURIComponent(config.password);

const pool = mysql.createPool({
  host: config.host,
  port: config.port,
  user: USER,
  password: PASSWORD,
  database: config.database,
  dateStrings: true
});

module.exports = pool;
