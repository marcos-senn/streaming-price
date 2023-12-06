const StreamingCard = ({streamingInfo, loading}) => {
	return (
		<div className='card bg-neutral text-neutral-content w-[280px] h-[340px] border border-transparent hover:border-slate-600 group'>
			<div className='card-body items-center text-center w-[280px]'>
				<h3 className='card-title mb-5 group-hover:text-white group-hover:font-bold'>
					{streamingInfo.serviceName.toUpperCase()}
				</h3>
				{streamingInfo.plans.map((plan, index) => (
					<div key={index}>
						<div className='form-control w-[270px] '>
							<label className='label cursor-pointer'>
								<input
									type='checkbox'
									checked={false}
									className='checkbox ml-2 w-5 h-5  group-hover:border-white'
								/>
								<span className='label-text ml-1 flex  group-hover:text-white'>{plan.planName}</span>
								<p className='ml-5 flex justify-end mr-1  group-hover:text-white'>{plan.planPrice}</p>
							</label>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default StreamingCard;
