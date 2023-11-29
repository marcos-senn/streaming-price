const { Router } = require("express");
const router = Router();

const { dolarOficial } = require("../handlers/dolarOficial.js");


router.get("/dolarOficial",dolarOficial)

module.exports = router;