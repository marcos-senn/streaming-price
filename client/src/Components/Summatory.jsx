import {StreamingServiceStore} from '../store/summatory';

const Summatory = () => {
	const services = StreamingServiceStore((state) => state.streaming);
	return (
		<div>
			<h3>Servicios</h3>
			{services.map((streamingService) => {
				return (
					<div>
						{streamingService.serviceName}
						{streamingService.planName}
						{`$${streamingService.planPrice}`}
					</div>
				);
			})}
			<h3>Total</h3>
			<h3>{`$${services.reduce((acc, streamingService) => acc + parseFloat(streamingService.planPrice), 0).toFixed(2)}`}</h3>
		</div>
	);
};

export default Summatory;
