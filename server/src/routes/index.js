const { Router } = require("express");
const router = Router();

const { dolarOficial } = require("../handlers/dolarOficial.js");
const { scrapWebsite } = require("../handlers/scrap.js");


router.get("/dolarOficial",dolarOficial)
router.get("/scrap",scrapWebsite)

module.exports = router;