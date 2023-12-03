import Cotizaciones from './Sections/Cotizaciones';
import Streaming from './Sections/Streaming';
import Footer from './Sections/Footer';

function App() {
	return (
		<main className='relative'>
			<section className=''>Hero</section>

			<section className='m-20'>
				<Cotizaciones/>
			</section>

			<section className='mx-20'>
				<Streaming/>
			</section>

			<section className=''>
				<Footer/>
			</section>
		</main>
	);
}

export default App;
