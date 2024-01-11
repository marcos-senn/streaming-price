const express = require("express");
const cokieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const routes = require("./routes/index");
const { createServer } = require("http");


const server = express();
const httpServer = createServer(server);

server.use(cors());
server.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
server.use(bodyParser.json({ limit: "50mb" }));
server.use(cokieParser());
server.use(morgan("dev"));
server.use((_req, res, next) => {
  res.header(
    "Access-Control-Allow-Origin",
    "https://streaming-price-eta.vercel.app/",

  ); // Actualizar para que coincida con el dominio desde el cual se realizará la solicitud
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

// Configuración de rutas principales
server.use("/", routes);
// Manejo de errores
server.use((err, _req, res, _next) => {
  // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});
// Exportación del servidor HTTP para ser utilizado en otros lugares
module.exports = httpServer;