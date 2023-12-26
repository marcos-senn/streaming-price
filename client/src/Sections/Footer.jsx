import Github from '../../assets/icons8-github.svg';
import Gmail from '../../assets/icons8-gmail.svg';
import Linkedin from '../../assets/icons8-linkedin.svg';
const Footer = () => {
	return (
		<div>
			<footer className='footer footer-center p-4 bg-base-300 text-base-content mt-20'>
				<aside>
					<p className='text-base'>Marcos Antonio Senn - Desarollador Full Stack</p>
					<div className='grid grid-flow-col gap-4'>
						<a target="_blank" href='https://github.com/marcos-senn' rel="noopener noreferrer">
							<img
								src={Github}
								alt='github icon'
								className='w-8 h-8 fill-current'
							/>
						</a>
						<a target="_blank" href='https://www.linkedin.com/in/marcossenn/' rel="noopener noreferrer">
							<img
								src={Linkedin}
								alt='linkedin icon'
								className='w-8 h-8 fill-current'
							/>
						</a>
						<a href="https://mail.google.com/mail/?view=cm&fs=1&to=marcos.senn@gmail.com" target="_blank" rel="noopener noreferrer">
							<img
								src={Gmail}
								alt='gmail icon'
								className='w-8 h-8 fill-current'
							/>
						</a>
					</div>
				</aside>
			</footer>
		</div>
	);
};

export default Footer;
