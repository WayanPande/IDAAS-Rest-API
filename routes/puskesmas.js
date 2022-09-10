var express = require('express');
const { Puskesmas } = require('../models');
var router = express.Router();

/* GET users listing. */
router.get('/', async (req, res) => {
    const puskesmas = await Puskesmas.findAll();
    return res.json(puskesmas);
});


module.exports = router;
