import { useEffect } from 'react';
import Cotizaciones from './Sections/Cotizaciones';
import Streaming from './Sections/Streaming';
import Footer from './Sections/Footer';
import Summatory from './Components/Summatory';
import NavBar from './Components/NavBar';
import Disclaimer from './Sections/Disclaimer';
import StreamingTitle from './Components/StreamingTitle';
import axios from 'axios';


function App() {
	
	useEffect(()=>{
		const updateData = async ()=>{
			try {
				axios.get('http://localhost:3000/webScrap')
			} catch (error) {
				console.log(error.message)
			}
	
		}
		const intervalId = setInterval(updateData, 60 * 3 * 1000);
		() => clearInterval(intervalId);
	},[])

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
