var express = require('express');
const { Klinik } = require('../models');
var router = express.Router();

/* GET users listing. */
router.get('/', async (req, res) => {
    const klinik = await Klinik.findAll();
    return res.json(klinik);
});


module.exports = router;
