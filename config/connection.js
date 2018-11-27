const mysql = require('mysql');

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "nImda62!",
  database: "burgers_db"
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});

module.exports = connection;