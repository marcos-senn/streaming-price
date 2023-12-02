const StreamingCard = ({streamingInfo}) => {
	return (
		<div className='card w-96 bg-neutral text-neutral-content'>
			<div className='card-body items-center text-center'>
				<h3 className='card-title'>{streamingInfo.serviceName}</h3>
				{streamingInfo.plans.map((plan, index) => (
					<div key={index}>
						<div class='form-control' className="w-[300px]">
							<label class='label cursor-pointer' className="flex justify-center items-center">
								<input type='checkbox' checked='' class='checkbox' className="checkbox mr-3 w-5 h-5"/>
								<span class='label-text'>{plan.planName}</span>
                        <p className="ml-5">{plan.planPrice}</p>
							</label>
						</div>
						
					</div>
				))}
			</div>
		</div>
	);
};

export default StreamingCard;
