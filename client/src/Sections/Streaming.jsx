import StreamingCard from '../Components/StreamingCard';
import {StreamingServiceStore} from '../store/summatory';
import {useEffect, useState} from 'react';
import axios from 'axios';

const Streaming = () => {
	const [streamingInfo, setStreamingInfo] = useState([]);
	const [loading, setLoading] = useState(true);
	const updateDataTime = StreamingServiceStore(
		(state) => state.updateScrapingTime,
	);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(
					'https://streamingprices.vercel.app/scrapingData',
				);

				const data = response.data[0].data;
				setStreamingInfo(data);
				setLoading(false);
				let date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();
				let hour = date.getHours();
				if (hour < 10) {
					hour = `0${hour}`;
				}
				let minutes = date.getMinutes();
				if (minutes < 10) {
					minutes = `0${minutes}`;
				}
				const uptadaDataTime = `${day}-0${month}-${year} ${hour}:${minutes}`;
				updateDataTime(uptadaDataTime);
				//console.log(response.data);
			} catch (error) {
				console.error('Error en la solicitud:', error);
				console.error('Detalles completos del error:', error.response);
			}
		};
		const intervalId = setInterval(fetchData, 60 * 5 * 1000);

		fetchData();

		() => clearInterval(intervalId);
	}, []);

	return loading ? (
		<div className='w-full flex justify-center items-center flex-wrap gap-5 '>
			<div className='skeleton h-[250px] w-[250px]'></div>
			<div className='skeleton h-[250px] w-[250px]'></div>
			<div className='skeleton h-[250px] w-[250px]'></div>
			<div className='skeleton h-[250px] w-[250px]'></div>
			<div className='skeleton h-[250px] w-[250px]'></div>
			<div className='skeleton h-[250px] w-[250px]'></div>
			<div className='skeleton h-[250px] w-[250px]'></div>
			<div className='skeleton h-[250px] w-[250px]'></div>
			<div className='skeleton h-[250px] w-[250px]'></div>
			<div className='skeleton h-[250px] w-[250px]'></div>
			<div className='skeleton h-[250px] w-[250px]'></div>
			<div className='skeleton h-[250px] w-[250px]'></div>
		</div>
	) : (
		<div className='w-full xlsm:order-last'>
			<div className='w-full flex justify-start items-center flex-wrap gap-5'>
				{streamingInfo.map((streaming) => (
					<StreamingCard
						key={streaming.serviceName}
						streamingInfo={streaming}
						loading={loading}
					/>
				))}
			</div>
		</div>
	);
};

export default Streaming;
