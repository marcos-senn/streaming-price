require('dotenv').config();
const puppeteer = require('puppeteer');
const {SCRAPING_URL} = process.env;

let puppeteerPool = [];
// const serviceElements = document.querySelectorAll('.css-j7qwjs');
// let services = [];

// serviceElements.forEach((serviceElement) => {
//   const serviceNameElement = serviceElement.querySelector('.css-7amdlx');
//   if (serviceNameElement) {
//     const serviceName = serviceNameElement.textContent.trim();
//     const planElements = serviceElement.querySelectorAll('.css-1kjktec');
//     const plans = Array.from(planElements).map((planElement) => {
//       const planNameElements = planElement.querySelectorAll('.css-1m2j1p4');
//       const planPriceElements = planElement.querySelectorAll('.css-m99oed');

//       // Mapear los elementos de nombre y precio
//       const planDetails = Array.from(planNameElements).map((nameElement, index) => {
//         const planName = nameElement.textContent.trim();
//         const planPrice = planPriceElements[index].textContent.trim();
//         return { planName, planPrice };
//       });

//       return planDetails;
//     });

//     services.push({ serviceName, plans: plans.flat() });
//   }
// });

// console.log(services);

/*esta funcion hace scraping en una web para diferentes cotizaciones de servicios de streaming y luego los retorna para que lo use el handler que llena la base de datos con 
los datos obtenidos*/
async function getBrowserInstance() {
	if (puppeteerPool.length) {
		const browser = puppeteerPool.pop();
		// Check if the browser is still usable before returning
		if (await browser.isConnected()) {
			return browser;
		}
		// Close the unusable browser and remove it from the pool
		await browser.close();
	}

	// Create a new browser instance if the pool is empty or all browsers are unusable
	const browser = await puppeteer.launch({
		args: [
			'--disable-web-security',
			'--disable-features=IsolateOrigins',
			'--disable-site-isolation-trials',
			'--no-sandbox',
			'--disable-setuid-sandbox',
		],
		headless: true,
	});

	// Register the browser in the pool for future use
	puppeteerPool.push(browser);

	return browser;
}

const scrapWebsite = async (req, res) => {
	let browser;

	try {
		browser = await getBrowserInstance();
		const page = await browser.newPage();

		await page.goto(SCRAPING_URL);
		await page.waitForSelector('.css-j7qwjs');

		const result = await page.evaluate(() => {
			const services = [];
			const serviceNamesSet = new Set();

			const serviceElements = document.querySelectorAll('.css-j7qwjs');

			for (const serviceElement of serviceElements) {
				const serviceNameElement = serviceElement.querySelector('.css-7amdlx');

				if (serviceNameElement) {
					const serviceName = serviceNameElement.textContent.trim();

					if (!serviceNamesSet.has(serviceName)) {
						serviceNamesSet.add(serviceName);

						const plans = Array.from(
							serviceElement.querySelectorAll('.css-1kjktec'),
						)
							.map((planElement) => {
								const planDetails = Array.from(
									planElement.querySelectorAll('.css-1m2j1p4'),
								).map((nameElement, index) => ({
									planName: nameElement.textContent.trim(),
									planPrice: planElement
										.querySelectorAll('.css-m99oed')
										[index].textContent.trim(),
								}));

								return planDetails;
							})
							.flat();

						services.push({serviceName, plans});
					}
				}
			}
			return services;
		});

		res.status(200).json(result);
		await browser.close();
	} catch (error) {
		console.error(error.message);
		res.status(500).json({error: error.message});
	}
};

module.exports = {scrapWebsite};
