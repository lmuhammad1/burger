const connection = require('../config/connection.js');

const orm = {
  selectAll: function() {
    connection.query('SELECT * from burgers', function(err, rows, fields) {
      connection.end();
        if (!err)
          console.log('The solution is: ', rows);
        else
          console.log('Error while performing Query.');
    });
  },
  
  insertOne: function(burgerName) {
    connection.query(`INSERT INTO burgers (burger_name) VALUES ('${burgerName}')`, function(err, result) {
      connection.end();
        if (!err)
          console.log('The number of rows affected: ', result.affectedRows);
        else
          console.log('Error while performing Query.');
    });
  },
  
  updateOne: function(id, name) {
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

module.exports = orm;
  
// console.log(orm.selectAll());
// console.log(orm.insertOne('BABurger8', false));
// console.log(orm.updateOne(4, 'LouisBurger'));