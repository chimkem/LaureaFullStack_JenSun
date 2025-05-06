const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 4000;

// Haetaan yhteys databaseen
const uri = process.env.MANGO;
// Täältä haetaan reitit
const kayttajapolku = require('./routes/userRoute');

// MidWare
app.use(bodyParser.json());

// Task 2: Use Mongoose for Database Queries
// Koska const uri = process.env.MANGO + "local_library"; ei toiminut, päätin kokeilla databasen lisäämistä tällä tyylillä.
mongoose.connect(uri, {dbName: 'local_library'});

// Reitit
app.use('/api', kayttajapolku);

// Vaikka sivustolla ei olekkaan UI:ta niin ajattelin tämän sopivan tänne :)
// 404 route
app.get('*', (req, res) => {
    res.status(404).send('404 - Page not found')
});

// Servu käyntiin
app.listen(PORT, () => {
    console.log('App listening to port: ' + PORT)
    console.log('http://localhost:' + PORT)
});
