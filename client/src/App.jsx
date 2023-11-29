import Cotizaciones from './Sections/Cotizaciones';

function App() {
	return (
		<main className='relative'>
			<section className=''>
				Hero
			</section>

			<section className='m-20'>
				<Cotizaciones/>
			</section>

			<section className=''>
				Streaming price
			</section>

			<section className=''>
				footer
			</section>
		</main>
	);
}

export default App;
