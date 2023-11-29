import DolarCard from './../Components/DolarCard';
import {useEffect, useState} from 'react';
import axios from 'axios';
const Cotizaciones = () => {
	const [cotizaciones, setCotizaciones] = useState([]);
   const [fecha,setFecha] = useState('');

	useEffect(() => {
		const getCotizaciones = async () => {
			const response = await axios.get('http://localhost:43223/dolarOficial');
			setCotizaciones(response.data);
         setFecha(response.data[0].fecha);
		};
		getCotizaciones();
      
	}, []);

	return (
		<>
			<div className='w-full flex justify-center items-center flex-wrap gap-2'>
				{cotizaciones.map((cotizacion) => (
					<div className=''>
						<DolarCard
							key={cotizacion.moneda}
							moneda={cotizacion.moneda}
							compra={cotizacion.compra}
							venta={cotizacion.venta}
						/>
					</div>
				))}
			</div>
			<div className='flex justify-center items-center mt-6 xsm:flex-col'>
				<h3 className='mr-2'>Ultima Actualización</h3>
				<p className='ml-2'>{fecha}</p>
			</div>
		</>
	);
};

export default Cotizaciones;
