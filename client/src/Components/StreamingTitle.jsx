import React from 'react';
import{useEffect, useState} from 'react'
import {StreamingServiceStore} from '../store/summatory';


const StreamingTitle = () => {
	const [ScrapupdateTime, setScrapUpdateTime] = useState('')
	const updateTime = StreamingServiceStore((state) => state.updateScrapingData);

	useEffect(()=>{
		
	const updateData = async ()=>{
		try {
			setScrapUpdateTime(updateTime)
		} catch (error) {
			console.log(error.message)
		}

	}
	const intervalId = setInterval(updateData, 60 * 3 * 1000);
	updateData();
	() => clearInterval(intervalId);
	})
	

	
	return (
		<div className='flex flex-col justify-center items-center'>
			<div>
				<h1 className='text-4xl text-white font-bold sm:text-6xl lg:text-10xl font-rubik'>
					Calcula el costo total de tus servicios contratados{' '}
				</h1>
			</div>
			<div>
				<p className='mt-8 font-palanquin'>
					Selecciona el plan que tienes contratado en cada servicio y se
					calculara automaticamente el precio final en pesos argentinos.
				</p>
			</div>
			<div className='flex justify-center items-center xsm:flex-col mt-1 '>
				<p className='xsm:ml-4'>Ultima Actualización</p>
				<p>&nbsp; &nbsp;{ScrapupdateTime}</p>
			</div>
		</div>
	);
};

export default StreamingTitle;
