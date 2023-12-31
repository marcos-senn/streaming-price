const DolarCard = ({moneda, compra, venta}) => {
	return (
		<div className='w-full h-[100px] xlsm:h-[150px] hover:border-slate-600'>
			<div className='w-full flex flex-col justify-center items-center xlsm:justify-normal xlsm:items-start'>
				<h2 className='card-title font-bold font-montserrat text-white text-sm xlsm:text-xs'>
					{moneda}
				</h2>
				<div className=''>
					{compra ? (
						<p className=' font-bold text-sm text-slate-100 xlsm:text-xs' >
							<span className='text-green-500 font-palanquin font-bold text-sm xlsm:text-xs'>COMPRA</span>
							{`\u00A0 \u00A0 $${compra}`}
						</p>
					) : null}

					<p className='font-bold text-sm text-slate-100 xlsm:text-xs'>
						<span className='text-red-500 font-palanquin font-bold text-sm '>VENTA </span>
						{`\u00A0 \u00A0 \u00A0 $${venta}`}
					</p>
				</div>
			</div>
		</div>
	);
};

export default DolarCard;
