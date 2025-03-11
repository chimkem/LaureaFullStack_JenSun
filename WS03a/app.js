const express = require('express');
const app = express();
const path = require('path')
require('dotenv').config();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get(['/', '/index(.html)?'], (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
app.get(['/about(.html)?'], (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
});
app.get(['/contact(.html)?'], (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});
app.get(['/services(.html)?'], (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'services.html'));
});
/* app.get('/', (req, res) => {
    res.send('Hello World!');
}); 

app.get('/about', (req, res) => {
    res.send('About Page');
});

app.get('/contact', (req, res) => {
    res.send('Contact Page');
});

app.get('/services', (req, res) => {
    res.send('Services Page');
}); */

// 404 route
app.get('*', (req, res) => {
    res.send('Error, cannot find the page', 404)
});

app.listen(PORT, () => {
    console.log('App listening to port: ' + PORT)
});