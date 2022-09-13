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
        attributes: { exclude: ['klinik_id', 'jenis_spesialis_id', 'rumah_sakit_id', 'poliklinik_id', 'puskesmas_id'] },
    });
    return res.json(dokter);
});

router.post('/', async (req, res) => {
    const dokter = await Dokter.create(req.body);
    return res.json(dokter);
});



module.exports = router;
