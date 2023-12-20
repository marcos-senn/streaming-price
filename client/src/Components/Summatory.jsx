import {StreamingServiceStore} from '../store/summatory';

const Summatory = () => {
	const services = StreamingServiceStore((state) => state.streaming);
	return (
		<div className='card bg-neutral text-neutral-content w-[400px] h-[500px] border border-transparent hover:border-red-500'>
			<div className='flex justify-center font-bold mt-3'>
				<h3>Calculo de servicios</h3>
			</div>
			<div className='grid grid-cols-3 w-full flex-col overflow-y-auto mt-3 ml-7'>
				<div>
					<h3 className='font-bold'>Servicio</h3>
				</div>
				<div>
					<p className='font-bold'>Plan</p>
				</div>
				<div>
					<p className='font-bold'>Precio</p>
				</div>
			</div>

			{services.length === 0 ? (
				<p className='flex justify-center mt-20'>
					Agrega tus planes para calcular el total
				</p>
			) : (
				<div className='w-full flexflex-col overflow-y-auto h-[380px] mt-3 ml-7'>
					{services.map((streamingService) => {
						return (
							<div className='grid grid-cols-3 gap-2 mb-4'>
								<div className='font-bold'>{streamingService.serviceName}</div>
								<div className='text-blue-500'>
									{streamingService.planName}
								</div>
								<div className=''>{`$${streamingService.planPrice}`}</div>
							</div>
						);
					})}
				</div>
			)}

			<div className='flex justify-center items-center gap-x-16 w-full absolute bottom-1'>
				<h3 className=''>Total</h3>
				<h3 className=''>{`$${services
					.reduce(
						(acc, streamingService) =>
							acc + parseFloat(streamingService.planPrice),
						0,
					)
					.toFixed(2)}`}</h3>
			</div>
		</div>
	);
};

export default Summatory;
