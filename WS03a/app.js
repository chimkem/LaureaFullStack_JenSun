const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 3000;

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.get('/about', function (req, res) {
    res.send('About Page');
});

app.get('/contact', function (req, res) {
    res.send('Contact Page');
});

app.get('/services', function (req, res) {
    res.send('Services Page');
});

// 404 route
app.get('*', function (req, res) {
    res.send('Error, cannot find the page', 404)
});

app.listen(PORT, function () {
    console.log('App listening to port: ' + PORT)
});