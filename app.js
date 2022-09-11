require('dotenv').config();
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productsRouter = require('./routes/products');
var klinikRouter = require('./routes/klinik');
var puskesmasRouter = require('./routes/puskesmas');
var spesialisRouter = require('./routes/spesialis');
var rumahSakitRouter = require('./routes/rumah_sakit');
var bakteriRouter = require('./routes/bakteri');
var antibiotikRouter = require('./routes/antibiotik');
var dokterRouter = require('./routes/dokter');
var pasienRouter = require('./routes/pasien');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);
app.use('/klinik', klinikRouter);
app.use('/puskesmas', puskesmasRouter);
app.use('/spesialis', spesialisRouter);
app.use('/rumah_sakit', rumahSakitRouter);
app.use('/bakteri', bakteriRouter);
app.use('/antibiotik', antibiotikRouter);
app.use('/dokter', dokterRouter);
app.use('/pasien', pasienRouter);

module.exports = app;
