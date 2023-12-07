import {summatoryStore} from '../store/summatory'

const Summatory = () => {
	const services = summatoryStore((state) => state.streaming);
	
	return (
		<div className='card bg-gray-900 text-neutral-content w-[480px] h-[340px]  border border-transparent hover:border-red-600 group mr-20'>
			<div className='card-body items-center text-center'>
				<h3 className='card-title mb-5 group-hover:text-white group-hover:font-bold'>TOTAL</h3>

				<div>
					<div className='form-control w-[270px] '>
						<div className='label cursor-pointer '>
							<p className='label-text ml-1 flex  group-hover:text-white'>nombre</p>
							<p className='ml-5 flex justify-end mr-1  group-hover:text-white'>precio</p>
						</div>
            <div className="flex  group-hover:text-white">
              <p>Total</p>
              <p>Precio</p>
            </div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Summatory;
