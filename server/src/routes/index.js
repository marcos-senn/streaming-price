const { Router } = require("express");
const router = Router();

const { dolarOficial } = require("../handlers/dolarOficial.js");
const { scrapingData } = require("../handlers/Scrap.js");
const {webScrap} = require("../handlers/WebScrap.js")

router.get("/scrapingData",scrapingData)
router.get("/dolarOficial",dolarOficial)
router.get("/webScrap",webScrap)


module.exports = router;