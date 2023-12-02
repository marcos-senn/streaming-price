import Cotizaciones from './Sections/Cotizaciones';
import Streaming from './Sections/Streaming';

function App() {
	return (
		<main className='relative'>
			<section className=''>Hero</section>

			<section className='m-20'>
				<Cotizaciones />
			</section>

			<section className=''>
				<Streaming/>
			</section>

			<section className=''>footer</section>
		</main>
	);
}

export default App;
