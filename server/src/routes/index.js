const { Router } = require("express");
const router = Router();

const { dolarOficial } = require("../handlers/dolarOficial.js");
const { scrapWebsite } = require("../handlers/Scrap.js");

router.get("/scrap",scrapWebsite)
router.get("/dolarOficial",dolarOficial)


module.exports = router;