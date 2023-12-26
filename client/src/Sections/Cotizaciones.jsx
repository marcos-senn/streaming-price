import DolarCard from './../Components/DolarCard';
import {useEffect, useState} from 'react';
import axios from 'axios';



const Cotizaciones = () => {
	const [cotizaciones, setCotizaciones] = useState([]);
	const [fecha, setFecha] = useState('');
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const getCotizaciones = async () => {
			try {
				const response = await axios.get('http://localhost:43223/dolarOficial');
				setCotizaciones(response.data);
				setFecha(response.data[0].fecha);
				setLoading(false);
			} catch (error) {
				console.log(error.message);
			}
		};
		getCotizaciones();
		const intervalId = setInterval(getCotizaciones, 5 * 60 * 1000);
		return () => clearInterval(intervalId);
	}, []);

	return loading ? (
		<div className='w-full flex justify-center items-center flex-wrap gap-5'>
			<div className='skeleton h-[124px] w-[382px]'></div>
			<div className='skeleton h-[124px] w-[382px]'></div>
			<div className='skeleton h-[124px] w-[382px]'></div>
			<div className='skeleton h-[124px] w-[382px]'></div>
			<div className='skeleton h-[124px] w-[382px]'></div>
			<div className='skeleton h-[124px] w-[382px]'></div>
			<div className='skeleton h-[124px] w-[382px]'></div>
			
		</div>
	) : (
		<div>
			<div id='cotizaciones' className='w-auto flex justify-center items-center flex-wrap gap-5 xsm'>
				{cotizaciones.map((cotizacion) => (
					<div className=''>
						<DolarCard
							key={cotizacion.index}
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
		</div>
	);
};

export default Cotizaciones;
