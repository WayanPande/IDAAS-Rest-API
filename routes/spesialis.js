var express = require('express');
const { Spesialis } = require('../models');
var router = express.Router();

/* GET users listing. */
router.get('/', async (req, res) => {
    const spesialis = await Spesialis.findAll();
    return res.json(spesialis);
});


module.exports = router;
