import DolarCard from './../Components/DolarCard';
import {useEffect, useState} from 'react';
import {Carousel} from 'antd';
import axios from 'axios';

const Cotizaciones = () => {
	const [cotizaciones, setCotizaciones] = useState([]);
	const [fecha, setFecha] = useState('');
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const getCotizaciones = async () => {
			try {
				const response = await axios.get('https://dolarapi.com/v1/dolares');
				setCotizaciones(response.data);
				setFecha(response.data[0].fecha);
				setLoading(false);
			} catch (error) {
				console.log(error);
			}
		};
		getCotizaciones();
		const intervalId = setInterval(getCotizaciones, 5 * 60 * 1000);
		return () => clearInterval(intervalId);
	}, []);

	return loading ? (
		<div className=''>
			<h3>Loading...</h3>
		</div>
	) : (
		<div className='w-full' id='cotizaciones'>
			<Carousel autoplay slidesToShow={3} className='w-full mx-auto'>
				{cotizaciones.map((cotizacion) => (
					<DolarCard
						key={cotizacion.index}
						moneda={cotizacion.nombre}
						compra={cotizacion.compra}
						venta={cotizacion.venta}
					/>
				))}
			</Carousel>

			<div className='flex justify-center items-center mt-6 xsm:flex-col'>
				<h3 className='mr-2'>Ultima Actualización</h3>
				<p className='ml-2'>{fecha}</p>
			</div>
		</div>
	);
};

export default Cotizaciones;
