import {StreamingServiceStore} from '../store/summatory';
import removeIcon from '../../assets/remove_icon.svg'

const Summatory = () => {
	const services = StreamingServiceStore((state) => state.streaming);
	const deleteStreaming = StreamingServiceStore(
		(state) => state.deleteStreaming,
	);
	const addCheckedState = StreamingServiceStore(
		(state) => state.addCheckedState,
	);
	const deleteStreamingService = (serviceName, planName) => {
		deleteStreaming(serviceName, planName);
		const currentCheckedState = StreamingServiceStore.getState().checkedState;
		const newCheckedState = {...currentCheckedState};
		delete newCheckedState[`${serviceName}_${planName}`];
		addCheckedState(newCheckedState);
	};

	return (
		<div id='streaming' className='card bg-neutral text-white w-[400px] h-[500px] border border-transparent hover:border-red-500 xlsm:mb-4 xlsm:w-[250px] xlsm:text-sm group'>
			<div className='flex justify-center font-bold mt-3'>
				<h3 className='uppercase group-hover:text-sky-600 group-hover:underline'>Calculo de servicios</h3>
			</div>
			<div className='grid grid-cols-3 w-auto flex-col mt-3 ml-4'>
				<div>
					<h3 className='font-bold underline'>Servicio</h3>
				</div>
				<div>
					<p className='font-bold underline'>Plan</p>
				</div>
				<div>
					<p className='font-bold underline'>Precio</p>
				</div>
			</div>

			{services.length === 0 ? (
				<p className='flex justify-center mt-20'>
					Agrega tus planes para calcular el total
				</p>
			) : (
				<div className='w-auto flex flex-col overflow-y-auto scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-red-500 scrollbar-track-slate-500 scrollbar-track-rounded h-[380px] mt-3 ml-4'>
					{services.map((streamingService) => {
						return (
							<div className='grid grid-cols-3 mb-4 text-sm items-center justify-start'>
								<div className='font-bold text-slate-100'>{streamingService.serviceName}</div>
								<div className='flex items-center text-blue-500'>
									{streamingService.planName}
								</div>
								<div className='flex items-center justify-between'>
									{`$${streamingService.planPrice}`}
									<div
										className='cursor-pointer'
										onClick={() => {
											deleteStreamingService(
												streamingService.serviceName,
												streamingService.planName,
											);
										}}
									>
										<img src={removeIcon} alt="remove icon"  className='w-6 h-6'/>
									</div>
								</div>
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
