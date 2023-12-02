const {Currency} = require('../db.js');
const axios = require('axios');
const { DateTime } = require('luxon');

const dolarOficial = async (req, res) => {
   try {
    const {data : tarjeta} = await axios.get('https://dolarapi.com/v1/dolares/tarjeta')
    const dolarTarjera = {
        moneda : tarjeta.nombre,
        compra : tarjeta.compra,
        venta : tarjeta.venta,
        fecha : tarjeta.fechaActualizacion
    }

    const {data} = await axios.get("https://dolarapi.com/v1/dolares")
    
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

    res.status(200).json([...cotizaciones,dolarTarjera]);
    
   } catch (error) {
    res.status(500).json({error: error.message});
   }
};

module.exports = {
    dolarOficial
}
