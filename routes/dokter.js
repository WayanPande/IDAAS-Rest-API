var express = require('express');
const { Dokter, sequelize } = require('../models');
var router = express.Router();
const model = require('../models/index');
const Spesialis = require('../models/Spesialis');

/* GET users listing. */
router.get('/', async (req, res) => {
    const dokter = await Dokter.findAll({
        include: [
            {
                model: model.Spesialis,
                as: 'jenis_spesialis'
            },
            {
                model: model.Klinik,
                as: 'klinik'
            },
            {
                model: model.Rumah_Sakit,
                as: 'rumah_sakit'
            },
            {
                model: model.Klinik,
                as: 'poliklinik'
            },
            {
                model: model.Puskesmas,
                as: 'puskesmas'
            },
        ],
        attributes: { exclude: ['klinik'] },
    });
    return res.json(dokter);
});

router.post('/', async (req, res) => {
    const dokter = await Dokter.create(req.body);
    return res.json(dokter);
});


// router.get('/id', async (req, res)=>{
//     const dokter = await Dokter.query("SELECT * FROM dokter INNER JOIN spesialis ON dokter.jenis_spesialis = spesialis.id")
// });


module.exports = router;
