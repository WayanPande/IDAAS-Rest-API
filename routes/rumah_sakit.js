var express = require('express');
const { Rumah_Sakit } = require('../models');
var router = express.Router();

/* GET users listing. */
router.get('/', async (req, res) => {
    const rumah_sakit = await Rumah_Sakit.findAll();
    return res.json(rumah_sakit);
});


module.exports = router;
