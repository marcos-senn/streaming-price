const {ScrapingDb} = require('../db.js');


const scrapingData = async (req, res) => {
	try {
		const data = await ScrapingDb.findAll({
			attributes:['data']
		})
		res.status(200).json(data);
	} catch (error) {
		res.status(400).json({ error: error.message })
	}
}


module.exports = { scrapingData };