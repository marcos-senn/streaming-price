import React from 'react';

const StreamingTitle = () => {
	return (
		<div className='flex flex-col justify-center items-center'>
			<div>
				<h1 className='text-4xl text-white font-bold sm:text-6xl lg:text-10xl font-rubik'>Calcula cuanto pagar por tus servicios contratados</h1>
			</div>
			<div>
				<p className='mt-8 font-palanquin'>
					Selecciona el plan que tienes contratado en cada servicio y se calculara automaticamente el precio final en pesos argentinos.
				</p>
			</div>
		</div>
	);
};

export default StreamingTitle