import React from 'react';

const NavBar = () => {
	return (
		<div className='navbar flex justify-end bg-base-300 fixed top-0 w-full z-50 xlsm:text-sm'>
			<div className='navbar-center'>
				<a className='btn btn-ghost text-sm' href='#cotizaciones'>Cotizaciones dolar</a>
            <a className='btn btn-ghost text-sm' href='#streaming'>Streaming</a>
            <a className='btn btn-ghost text-sm' href='#disclaimer'>+Info</a>
			</div>
		</div>
	);
};

export default NavBar;
