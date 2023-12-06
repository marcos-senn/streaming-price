import Cotizaciones from './Sections/Cotizaciones';
import Streaming from './Sections/Streaming';
import Footer from './Sections/Footer';
import Summatory from './Components/Summatory';

function App() {
	return (
		<main className='relative'>
			<section className=''>Hero</section>

			<section className='m-20'>
				<Cotizaciones/>
			</section>

			<section className='mx-20 flex'>
				<Streaming/>
				<Summatory/>
			</section>

			<section className=''>
				<Footer/>
			</section>
		</main>
	);
}

export default App;
