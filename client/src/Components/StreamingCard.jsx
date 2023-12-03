const StreamingCard = ({streamingInfo}) => {
	return (
		<div className='card bg-neutral text-neutral-content w-[280px] h-[300px]'>
			<div className='card-body items-center text-center w-[280px]'>
				<h3 className='card-title mb-5'>{streamingInfo.serviceName.toUpperCase()}</h3>
				{streamingInfo.plans.map((plan, index) => (
					<div key={index}>
						<div class='form-control ' className="w-[270px] flex">
							<label class='label cursor-pointer' className="flex">
								<input type='checkbox' checked='' class='checkbox' className="checkbox ml-2 w-5 h-5"/>
								<span class='label-text ml-1'>{plan.planName}</span>
							</label>
							<p className="ml-5 flex justify-end mr-1">{plan.planPrice}</p>
						</div>
						
					</div>
				))}
			</div>
		</div>
	);
};

export default StreamingCard;
