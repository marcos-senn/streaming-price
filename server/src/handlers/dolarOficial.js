const {Currency} = require('../db.js');
const axios = require('axios');
const { DateTime } = require('luxon');
const { DOLAR_TARJETA, DOLAR_TOTAL } = process.env;

const dolarOficial = async (req, res) => {
   try {
    

    const {data} = await axios.get(DOLAR_TOTAL)
    
        const cotizaciones = data.map((cotizacion) => {
            const fechaOriginal = DateTime.fromISO(cotizacion.fechaActualizacion, { zone: 'utc' });
            const fechaGMT3 = fechaOriginal.setZone('America/Argentina/Buenos_Aires');
            cotizacion.fechaActualizacion = fechaGMT3.toFormat('dd-MM-yyyy HH:mm');
            
        return {
            moneda : cotizacion.nombre,
            compra : cotizacion.compra,
            venta : cotizacion.venta,
            fecha : cotizacion.fechaActualizacion
        }
    })

    res.status(200).json([...cotizaciones]);
    
   } catch (error) {
    res.status(500).json({error: "error.message"});
   }
};

module.exports = {
    dolarOficial
}
