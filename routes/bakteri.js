var express = require('express');
const { Bakteri } = require('../models');
var router = express.Router();

/* GET users listing. */
router.get('/', async (req, res) => {
    const bakteri = await Bakteri.findAll();
    return res.json(bakteri);
});


module.exports = router;
