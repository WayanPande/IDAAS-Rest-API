var express = require('express');
const { Pasien, Visitasi, Spesimen, Antibiotik_Sensitif, Riwayat_Antibiotik, Pemberian_Antibiotik, sequelize } = require('../models');
var router = express.Router();
const model = require('../models/index');

/* GET users listing. */
router.get('/:id', async (req, res) => {

    const id = req.params.id;

    const pasien = await Pasien.findOne({
        where: { id: id },
        include: [
            {
                model: model.Visitasi,
                as: 'visitasi',
                include: [
                    {
                        model: model.Spesimen,
                        as: 'spesimen'
                    },
                    {
                        model: model.Antibiotik_Sensitif,
                        as: 'antibiotik_sensitif',
                        include: [
                            {
                                model: model.Antibiotik,
                                as: 'nama_antibiotik_sensitif',
                                attributes: {
                                    exclude: ['updatedAt', 'id_visitasi']
                                }
                            }
                        ],
                        attributes: {
                            exclude: ['id_antibiotik', 'createdAt', 'updatedAt', 'id_visitasi']
                        }
                    },
                    {
                        model: model.Riwayat_Antibiotik,
                        as: 'riwayat_antibiotik',
                        include: [
                            {
                                model: model.Pemberian_Antibiotik,
                                as: 'pemberian_antibiotik',
                                include: [
                                    {
                                        model: model.Antibiotik,
                                        as: 'antibiotik',
                                        attributes: {
                                            exclude: ['updatedAt', 'id_visitasi']
                                        }
                                    }
                                ],
                                attributes: {
                                    exclude: ['id_antibiotik', 'createdAt', 'updatedAt', 'id_visitasi', 'id_riwayat_antibiotik']
                                }
                            }
                        ]
                    }
                ]
            },
        ],
        attributes: { exclude: ['klinik_id', 'jenis_spesialis_id', 'rumah_sakit_id', 'poliklinik_id', 'puskesmas_id'] },
    });
    return res.json(pasien);
});

router.post('/', async (req, res) => {
    const pasien = await Pasien.create(req.body);
    let visitasiData = req.body.visitasi;
    let spesimenData = req.body.spesimen;
    let riwayatAntibiotikData = req.body.riwayat_antibiotik;
    let antibiotikSensitifData = req.body.antibiotik_sensitif;
    let pemberianAntibiotikData = req.body.pemberian_antibiotik;

    visitasiData = { pasien_id: pasien.id, ...visitasiData };

    const visitasi = await Visitasi.create(visitasiData);

    if (spesimenData != null) {
        spesimenData = { id_visitasi: visitasi.id, ...spesimenData };
    } else {
        spesimenData = {};
    }

    const spesimen = await Spesimen.create(spesimenData);

    antibiotikSensitifData.forEach(async e => {
        let temp = {};
        temp = { id_visitasi: visitasi.id, id_antibiotik: e.id_antibiotik };

        const antibiotikSensitif = await Antibiotik_Sensitif.create(temp);
    });

    riwayatAntibiotikData = { id_visitasi: visitasi.id, ...riwayatAntibiotikData };

    const riwayatAntibiotik = await Riwayat_Antibiotik.create(riwayatAntibiotikData);


    pemberianAntibiotikData.forEach(async e => {
        let temp = {};
        temp = { id_riwayat_antibiotik: riwayatAntibiotik.id, ...e };

        const pemberianAntibiotik = await Pemberian_Antibiotik.create(temp);
    });

    return res.json(riwayatAntibiotik);
});

router.get('/', async (req, res) => {
    const pasien = await Pasien.findAll({
        order: [
            ['id', 'DESC'],
        ],
    });
    return res.json(pasien);
});

router.delete('/:id', async (req, res) => {
    const id = req.params.id;

    const pasien = await Pasien.destroy({
        where: {
            id
        }
    });

    return res.json(pasien);
});


module.exports = router;
