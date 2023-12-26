import { StreamingServiceStore } from "../store/summatory";
import { v4 as uuidv4 } from 'uuid'


const StreamingCard = ({streamingInfo}) => {

	const addStreaming = StreamingServiceStore((state) => state.addStreaming);
	const deleteStreaming = StreamingServiceStore((state)=>state.deleteStreaming)
	const addCheckedState = StreamingServiceStore((state)=>state.addCheckedState)
	const checkedState = StreamingServiceStore((state) => state.checkedState)

	const handleCheck = (planName)=>{
		
		const serviceName = streamingInfo.serviceName
		const plans = streamingInfo.plans.filter((plans)=>{return plans.planName === planName})
		const price = plans[0].planPrice
		const planPrice = Number(parseFloat(price.replace('.','').replace('$','').replace(',','.')))
		
		const uniqueIdentifier = `${serviceName}_${planName}`;
	
		if(!checkedState[uniqueIdentifier]){
			addStreaming(serviceName, planName , planPrice)
			
		} else{
			
			deleteStreaming(serviceName, planName)
			
		}
		addCheckedState({...checkedState, [uniqueIdentifier]:!checkedState[uniqueIdentifier]})


	}

	return (
		<div className='card bg-neutral text-neutral-content w-[250px] h-[250px] border border-transparent hover:border-sky-600 group '>
			<div className='card-body items-center text-center w-[250px] text-xs'>
				<h3 className='card-title mb-1 group-hover:underline group-hover:font-bold text-sm text-white group-hover:text-sky-500'>
					{streamingInfo.serviceName.toUpperCase()}
				</h3>
				{streamingInfo.plans.map((plan, index) => (
					<div key={index} className="">
						<div className='form-control w-[250px] hover:scale-105 hover:translate-x-2'>
							<label className='label cursor-pointer'>
								<input
									key={uuidv4()}
									type='checkbox'
									checked={checkedState[`${streamingInfo.serviceName}_${plan.planName}`] || false}
									className='checkbox w-4 h-4 border-white'
									onChange={()=>handleCheck(plan.planName)}
								/>
								<span className='label-text ml-1 flex text-white'>{plan.planName}</span>
								<p className='flex justify-end mr-8 text-white'>{plan.planPrice}</p>
							</label>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default StreamingCard;
