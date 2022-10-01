var express = require('express');
const { Dokter, sequelize } = require('../models');
var router = express.Router();
const model = require('../models/index');
const Spesialis = require('../models/Spesialis');
const bcrypt = require('bcrypt');
const multer = require('multer');
const { normalize } = require('path')
const fs = require('fs')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, normalize('./image_uploads'));
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        const filetype = file.originalname.split('.').pop();
        cb(null, file.fieldname + '-' + uniqueSuffix + '.' + filetype);
    }
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        cb(null, false);
    }
}

const upload = multer({ storage: storage, fileFilter: fileFilter });

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

    try {
        const user = await Dokter.findOne({ where: { email: req.body.email } });

        if (user == null) {
            let data = req.body;
            const password = await bcrypt.hash(req.body.password, 10);
            data.password = password;

            const dokter = await Dokter.create(data);
            res.json({
                error: false,
                msg: "user succesfuly added"
            });
        } else {
            res.json({
                error: true,
                msg: "user has been registered"
            });
        }

    } catch (error) {
        res.status(500).send();
    }
});

router.post('/login', async (req, res) => {
    try {
        const user = await Dokter.findOne({ where: { email: req.body.email } });
        if (user == null) {
            res.json({
                error: true,
                msg: "user not found"
            });
        }


        if (await bcrypt.compare(req.body.password, user.dataValues.password)) {
            res.json({
                error: false,
                msg: "success",
                id: user.id
            });

        } else {
            res.json({
                error: false,
                msg: "fail"
            });
        }


    } catch (error) {
        res.status(500).send();
    }
});

router.post("/image_upload/:id", upload.single('image'), async (req, res) => {
    const id = req.params.id;
    const imageFileName = req.file.filename;

    const imageName = await Dokter.findOne({
        where: {
            id
        },
        attributes: ['image']
    });

    console.log(imageName.image);

    if (imageName.image !== null) {
        fs.unlink('./image_uploads/' + imageName.image, (e) => {
            if (e) {
                console.log(e.message);
            } else {
                console.log('was deleted');
            }
        })
    }

    const dokter = await Dokter.update({ image: imageFileName }, {
        where: {
            id
        }
    });
    return res.json(dokter);

});


router.get('/:id', async (req, res) => {
    const id = req.params.id;
    const dokter = await Dokter.findOne({
        where: {
            id
        },
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


module.exports = router;
