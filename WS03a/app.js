const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config();
const PORT = process.env.PORT || 3000;
const bodyparser = require('body-parser');

app.use(express.static(path.join(__dirname, 'public')));

// BodyParser
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

app.get("/", function (req, res) {
    res.render("/index.html");
  });

app.get('/about(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

app.get('/contact(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});

app.get('/services(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'services.html'));
});

app.get('/submit', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'submit.html'));

});

app.post('/submit', (req, res) => {
    res.send(req.body);
    // console.log(req.body); Tämä omaa testausta varten
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
    res.status(404).send('Error, cannot find the page')
});

app.listen(PORT, () => {
    console.log('App listening to port: ' + PORT)
    console.log('http://localhost:'+PORT)
});