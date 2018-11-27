const connection = require('./connection');

module.export = function () {
  function selectAll() {
    connection.query('SELECT * from burgers', function(err, rows, fields) {
      connection.end();
        if (!err)
          console.log('The solution is: ', rows);
        else
          console.log('Error while performing Query.');
    });
  }
  
  function insertOne(b1, b2) {
    connection.query(`INSERT INTO burgers (burger_name, devoured) VALUES ('${b1}', ${b2})`, function(err, result) {
      connection.end();
        if (!err)
          console.log('The number of rows affected: ', result.affectedRows);
        else
          console.log('Error while performing Query.');
    });
  }
  
  function updateOne(id, name) {
    sql = `UPDATE burgers SET burger_name = '${name}' WHERE id = ${id}`;
    connection.query(sql, function(err, rows, fields) {
      connection.end();
        if (!err)
          console.log('The solution is: ', rows);
        else
          console.log('Error while performing Query.');
    });
  }
};
// console.log(selectAll());
// console.log(insertOne('BABurger8', 1));
// console.log(updateOne(10, 'LouisBurger'));