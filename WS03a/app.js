const express = require('express');
const app = express();
const path = require('path')
require('dotenv').config();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/index.html', express.static(path.join(__dirname, 'public', 'index.html')));

app.get('/about', (req, res) => {
    res.send('About Page');
});

app.get('/contact', (req, res) => {
    res.send('Contact Page');
});

app.get('/services', (req, res) => {
    res.send('Services Page');
});

// 404 route
app.get('*', (req, res) => {
    res.send('Error, cannot find the page', 404)
});

app.listen(PORT, () => {
    console.log('App listening to port: ' + PORT)
});