const puppeteer = require('puppeteer');

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


const scrapWebsite = async (req, res) => {
   try {
     const browser = await puppeteer.launch({
       args: [
         '--disable-web-security',
         '--disable-features=IsolateOrigins',
         '--disable-site-isolation-trials',
         '--no-sandbox',
         '--disable-setuid-sandbox',
       ],
       headless: "new",
     });
     const page = await browser.newPage();
 
     await page.goto('https://www.finanzasargy.com/cotizaciones-streaming');
 
     // Esperar a que la página se cargue completamente
     await page.waitForSelector('.css-j7qwjs');
 
     const result = await page.evaluate(() => {
       let services = [];
       let serviceNamesSet = new Set();
 
       const serviceElements = document.querySelectorAll('.css-j7qwjs');
 
       Array.from(serviceElements).forEach((serviceElement) => {
         const serviceNameElement = serviceElement.querySelector('.css-7amdlx');
 
         if (serviceNameElement) {
           const serviceName = serviceNameElement.textContent.trim();
           const planElements = serviceElement.querySelectorAll('.css-1kjktec');
           const plans = Array.from(planElements).map((planElement) => {
             const planNameElements = planElement.querySelectorAll('.css-1m2j1p4');
             const planPriceElements = planElement.querySelectorAll('.css-m99oed');
    
             // Mapear los elementos de nombre y precio
             const planDetails = Array.from(planNameElements).map((nameElement, index) => {
               const planName = nameElement.textContent.trim();
               const planPrice = planPriceElements[index].textContent.trim();
               return { planName, planPrice };
             });
    
             return planDetails;
           });
    
           services.push({ serviceName, plans: plans.flat() });
         }
       });
 
       return services;
     });
 
     res.status(200).json(result);
     await browser.close();
   } catch (error) {
     console.error(error.message);
     res.status(500).json({ error: error.message });
   }
 };
 

module.exports = { scrapWebsite };
