var express = require('express');
const { Antibiotik } = require('../models');
var router = express.Router();

/* GET users listing. */
router.get('/', async (req, res) => {
    const antibiotik = await Antibiotik.findAll();
    return res.json(antibiotik);
});


module.exports = router;
