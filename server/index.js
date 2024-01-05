// Importación del servidor HTTP y la conexión a la base de datos desde archivos separados
const httpServer = require("./src/app");
const port = process.env.PORT || 3000;
// Definición del puerto a utilizar, obtenido de las variables de entorno


// Sincronización de la base de datos y inicio del servidor

   // La opción "force: false" evita la eliminación de datos existentes en cada sincronización
  
    httpServer.listen(port, () => {
      console.log(`server conectado a base de datos, puerto ${port}`);
    });
  
