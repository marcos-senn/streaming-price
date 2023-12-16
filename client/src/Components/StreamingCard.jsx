import { StreamingServiceStore } from "../store/summatory";
import {useState, useEffect} from 'react'


const StreamingCard = ({streamingInfo}) => {
	const store = StreamingServiceStore((state) => state.streaming);
	const addStreaming = StreamingServiceStore((state) => state.addStreaming);
	const deleteStreaming = StreamingServiceStore((state)=>state.deleteStreaming)
	const [checkedState, setCheckedState] = useState({})

	useEffect((()=>{
		console.log(store)
	}),[store])

	const handleCheck = (planName)=>{
		
		const serviceName = streamingInfo.serviceName
		const plans = streamingInfo.plans.filter((plans)=>{return plans.planName === planName})
		const price = plans[0].planPrice
		const planPrice = Number(parseFloat(price.replace('.','').replace('$','').replace(',','.')))
		
	
		if(!checkedState[planName]){
			//console.log(`Adding ${serviceName} ${planName} ${planPrice}`)
			addStreaming(serviceName, planName , planPrice)
		} else{
			//console.log(`Deleting ${serviceName} ${planName} ${planPrice}`)
			deleteStreaming(serviceName, planName)
		}
		setCheckedState((prevState)=>({...prevState, [planName]:!prevState[planName]}))
		//console.log(checkedState)

	}

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
									key={plan.planName}
									type='checkbox'
									checked={checkedState[plan.planName] || false}
									className='checkbox ml-2 w-5 h-5  group-hover:border-white'
									onChange={()=>handleCheck(plan.planName)}
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
