const DolarCard = ({moneda, compra, venta}) => {
	return (
		<div className='card xsm:w-[350px] w-96 shadow-xl bg-slate-900 border border-transparent group hover:border-slate-600'>
			<div className='card-body justify-center items-center'>
				<h2 className='card-title flex justify-center font-bold font-montserrat text-slate-300'>
					{moneda}
				</h2>
				<div className='flex justify-center items-center'>
					{compra ? (
						<p className='px-4a font-bold'>
							<span className='text-green-500 font-palanquin font-bold'>COMPRA </span>
							{compra}
						</p>
					) : null}

					<p className='px-4 font-bold'>
						<span className='text-red-500 font-palanquin font-bold'>VENTA </span>
						{venta}
					</p>
				</div>
			</div>
		</div>
	);
};

export default DolarCard;
