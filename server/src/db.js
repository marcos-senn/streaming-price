require("dotenv").config();
const { Sequelize } = require("sequelize");
const path = require("path");
const fs = require("fs");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = process.env;

const sequelize = new Sequelize({
    host: DB_HOST,
    username: DB_USER,
    password: DB_PASSWORD,
    port: DB_PORT,
    database: DB_NAME,
    dialect: "mysql", 
    logging:false  // Desactiva el registro de consultas SQL en la consola
  });

  const basename = path.basename(__filename);

  // Lectura y carga dinámica de modelos desde la carpeta 'models'
const modelDefiners = [];

//usamos filesystem para extraer de la carpeta models el nombre de cada modelo y pushearlo al array modelDefiners
fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos que estan en el Array modelDefiners
modelDefiners.forEach((model) => model(sequelize));

// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);

let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

const {
    Currency,
  } = sequelize.models;

  // Relaciones entre modelos


  // Exportación de modelos y la conexión para su uso en otras partes de la aplicación
module.exports = {
    ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
    conn: sequelize, // para importart la conexión { pool } = require('./db.js');
  };