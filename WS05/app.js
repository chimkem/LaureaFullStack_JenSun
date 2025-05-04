const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 4000;

const uri = process.env.MANGO;
const kayttajapolku = require('./routes/userRoute');

// MidWare
app.use(bodyParser.json());

// Mongoose
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, dbName: 'local_library'});

// Reitit
app.use('/api', kayttajapolku);

// Servu käyntiin
app.listen(PORT, () => {
    console.log('App listening to port: ' + PORT)
    console.log('http://localhost:' + PORT)
});
