import Cotizaciones from './Sections/Cotizaciones';
import Streaming from './Sections/Streaming';
import Footer from './Sections/Footer';
import Summatory from './Components/Summatory';
import NavBar from './Components/NavBar';
import Disclaimer from './Sections/Disclaimer';
import StreamingTitle from './Components/StreamingTitle';

function App() {
	return (
		<main className='relative'>
			<section className=''>
				<NavBar />
			</section>

			<section className='m-20 flex justify-center'>
				<Cotizaciones />
			</section>

			<section className='m-20 flex justify-center xlsm:flex-col'>
				<StreamingTitle />
			</section>

			<section className='m-20 flex justify-center xlsm:flex-col'>
				<Streaming />
				<Summatory />
			</section>

			<section>
				<Disclaimer />
			</section>

			<section className=''>
				<Footer />
			</section>
		</main>
	);
}

export default App;
