const mysql = require('mysql');

const conexionMySQL = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'camposED',
});

conexionMySQL.connect(err => {
  if (err) {
    //throw err; // Lanzar una excepción si hay un error en la conexión al Mysql
    console.log('Error en la conexión MySQL:', err);

  }
  console.log('Base de datos MySQL conectada!');
});

module.exports = conexionMySQL;
