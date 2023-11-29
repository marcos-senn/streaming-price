const DolarCard = ({moneda,compra,venta}) => {
	return (
		<div className='card xsm:w-[350px] w-96 shadow-xl bg-slate-900 '>
			<div className='card-body justify-center items-center'>
				<h2 className='card-title flex justify-center font-bold font-montserrat'>{moneda}</h2>
				<div className="flex justify-center items-center">
					<p className="px-4a"><span className="text-green-600 font-palanquin">COMPRA </span>{compra}</p>
					<p className="px-4"><span className="text-red-500 font-palanquin">VENTA </span>{venta}</p>
				</div>
			</div>
		</div>
	);
};

export default DolarCard;
