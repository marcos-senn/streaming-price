import React from 'react';

const Disclaimer = () => {
	return (
		<div id='disclaimer' className=' w-full flex flex-wrap items-center justify-center text-justify xlsm:text-sm xlsm:p-5'>
			<div className='w-full flex flex-wrap items-center justify-center text-justify xlsm:text-sm xlsm:p-5'>
			<p className='w-[1000px] '>
				Todas las cotizaciones publicadas en este sitio web son a
				fines informativos y tienen un carácter orientativo, por lo que deben
				ser tomados únicamente a modo de referencia. Las fuentes de información
				aquí citadas son de público acceso y no de confeccion propia por lo que
				no garantizan la precisión y/o veracidad y/o exactitud y/o integridad
				y/o vigencia de los datos mostrados en este sitio. El autor de este
				sitio no se hacer responsable por los daños y/o perjuicios que pudiere
				ocasionar la toma de de decisiones en base a la información recabada en
				el mismo, como así tampoco se hace responsable sobre el uso que puedan
				hacer terceros con la información brindada.
			</p>
			</div>
			
			<div className='w-[1000px] flex flex-col items-center justify-center text-justify xlsm:text-sm xlsm:p-5'>
				<p>Los precios que visualizas incluyen el costo del servicio expresado en pesos argentinos al cual se le aplicará un 8% correspondiente al Impuesto País, un 21% correspondiente al Impuesto al Valor Agregado (IVA) y un 30% a cuenta del Impuesto a las Ganancias</p>
			</div>
		</div>
	);
};

export default Disclaimer
