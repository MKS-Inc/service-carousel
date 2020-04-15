const mysql = require('mysql');

const DB_HOST = process.env.DB_HOST || 'localhost';
const PASSWORD = process.env.PASSWORD || '1';

const connection = mysql.createConnection({
  host: DB_HOST,
  user: 'root',
  password: PASSWORD,
  database: 'mks',
});

connection.connect((err) => {
  if (err) console.error('Mysql connection error:', err);
});

module.exports = connection;
