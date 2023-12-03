import Github from '../../public/assets/icons8-github.svg';
import Gmail from '../../public/assets/icons8-gmail.svg';
import Linkedin from '../../public/assets/icons8-linkedin.svg';
const Footer = () => {
	return (
		<div>
			<footer className='footer footer-center p-4 bg-base-300 text-base-content mt-20'>
				<aside>
					<p className='text-base'>Marcos Antonio Senn - Desarollador Full Stack</p>
					<div className='grid grid-flow-col gap-4'>
						<a>
							<img
								src={Github}
								alt='github icon'
								className='w-8 h-8 fill-current'
							/>
						</a>
						<a>
							<img
								src={Linkedin}
								alt='linkedin icon'
								className='w-8 h-8 fill-current'
							/>
						</a>
						<a>
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
