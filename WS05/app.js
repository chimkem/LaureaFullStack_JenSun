const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();
const kayttaja = require('./routes/userRoute');

// MidWare
app.use(bodyParser.json());

// Mongoose
mongoose.connect('mongodb://127.0.0.1:27017/test');

// Reitit
app.use('/api', kayttaja);