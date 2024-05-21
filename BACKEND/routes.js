// creamos las constantes con las librerias que vamos a necesitar
const express = require("express");
const router = express.Router();
const conexionMySQL = require('./conexionMySQL.js');
const mysql = require('mysql');


// creo la URL con la que guardamos el dato del formulario en la BBDD
router.post("/guardarEF", (req, res) => {
  //creo una variable apra almacenar los datos que me llegan del servidor
  const campo1 = req.body.campo1;

  // valido que los campos que me llegan no estén vacíos
  if (campo1.lenth === 0) {
    mensajes.innerHTML = "Validación de servidor: el campo que recibimos esta vacío.";
    return;
  } else {
  const sql = "insert into campos values (default, ? );";
  conexionMySQL.query(sql, [campo1], err => {
    if (err) {
      res.json({
        "status": 500,
        "mensaje": "Error al guardar el dato:" + err
      });
    } else {
      res.json({
        "status": 200,
        "mensaje": "Dato guardado correctamente!"
      });
    }
  });
}
});


// creo la URL para LEER los datos de la BBDD 
router.get("/leerEF", (req, res) => {
  const sql = "select * from campos;";
  conexionMySQL.query(sql, (error, resultado) => {
    if (error) {
      res.json({
        "status": 500,
        "mensaje": "Error al mostrar datos:" + error
      });
    } else {
      res.json({
        "status": 200,
        "resultado": resultado 
      });
    }
  });
});  


////*******Con esta línea siempre al final para recoger todo lo ejecutado antes en el mismo archivo ********** */
module.exports = router;
