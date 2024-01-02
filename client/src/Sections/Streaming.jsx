import StreamingCard from '../Components/StreamingCard';
import {useEffect, useState} from 'react';
import axios from 'axios';


const Streaming = () => {
	const [streamingInfo, setStreamingInfo] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			
			try {
				const response = await axios.get('http://localhost:43223/scrap');
				setStreamingInfo(response.data);
				setLoading(false);
				//console.log(response.data);
			} catch (error) {
				//console.log(error.message);
			}
			
		};

		fetchData();
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
