# Aplicativo Básico con Node.js, Express, MySQL, HTML5, CSS3 y JavaScript

Este es un proyecto básico que consiste en un formulario HTML con un campo de entrada y un botón de guardar. Al hacer clic en el botón, se envía una solicitud a una ruta del servidor para guardar el dato en una base de datos MySQL y posteriormente, se muestra el dato guardado debajo del formulario.

## Tecnologías Utilizadas

- **Backend**: Node.js, Express, MySQL, CORS
- **Frontend**: HTML5, CSS3, JavaScript

## Requisitos

- Node.js
- MySQL

## Instalación

1. **Instalar dependencias:**

   ```bash
   cd BACKEND
   npm install express cors mysql

## 
2. **Configurar la base de datos:**

Crear una base de datos en MySQL.

Ejecutar el archivo camposED.sql ubicado en la carpeta BD para crear la base de datos y la tabla necesarias:

   ```DROP DATABASE IF EXISTS `camposED`;
        CREATE DATABASE `camposED`;

        USE `camposED`;
        CREATE TABLE `campos` (
        id INT PRIMARY KEY AUTO_INCREMENT,
        campo VARCHAR(255)
        );

        SELECT * FROM `campos`;

3. **Iniciar el servidor:**

   ```npm start

## Estructura del Proyecto

 BACKEND/
   api.js
   conexionMySQL.js
   package-lock.json
   package.json
   routes.js
   BD/camposED.sql


 FRONTEND/
   index.html
   js/app.js
   css/styles.css

## Descripción de Archivos
- BACKEND/api.js: Configura la aplicación de Express y las rutas.
- BACKEND/conexionMySQL.js: Establece la conexión con la base de datos MySQL.
- BACKEND/routes.js: Define las rutas del servidor para manejar las solicitudes relacionadas con los datos.
- BACKEND/BD/camposED.sql: Contiene el script SQL para crear la base de datos y la tabla en MySQL.

- FRONTEND/index.html: Contiene el formulario y la estructura básica del HTML.
- FRONTEND/css/styles.css: Contiene los estilos CSS para el formulario y el recuadro de datos.
- FRONTEND/js/app.js: Contiene el código JavaScript para manejar el envío del formulario y la actualización de los datos mostrados.


## Uso
**Abrir el navegador:**
- Navegar a http://localhost:3500/api/v1/.
- Completar el formulario con el dato a guardar.
- Hacer clic en "Guardar".
- Ver el dato guardado:

El dato se mostrará debajo del formulario en un recuadro horizontal.