const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config();
const PORT = process.env.PORT || 3000;
const bodyparser = require('body-parser');
const ejs = require("ejs");
const fs = require('fs');
// -----------------------------------------

// ----------------- Exercise 4 ----------------------
// Logging function
function logger(req, res, next) {
    console.log(`${req.method} ${req.url}`);
    next();
}
app.use(logger);

// Custom-Header function (Used in a route /about)
function Custom(req, res, next) {
    if (!req.headers['x-custom-header']) {
        console.error('X-Custom-Header is missing');
    }
    next();
}

// Set views
app.set("views", `${__dirname}/views`)
app.set("view engine", "ejs");

// Use static pages
app.use(express.static(path.join(__dirname, 'public')));

// BodyParser
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

// ----------------- Exercise 1 & 2 ----------------------
// Routes
app.get("/", function (req, res) {
    res.render("/index");
  });
app.get('/about(.html)?', Custom, (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
});
app.get('/contact(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});
app.get('/services(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'services.html'));
});

// ------------------- Exercise 3 ----------------------
// POST
app.get('/submit', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'submit.html'));
});
app.post('/submit', (req, res) => {
    res.send(req.body);
    // console.log(req.body); Tämä omaa testausta varten
});

// ------------------- Exercise 5 ----------------------
// LIST
app.get('/list', function (req, res) {
    res.sendFile(path.join(__dirname, 'public', 'list.html'));
});
app.get('/list-data', function (req, res) {
    const filePath = path.join(__dirname, 'public', 'data.txt');
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        return res.status(500).send("Error reading file");
      }
      res.send(data);
    });
});
// JSON
app.get('/json', (req, res) => {
    fs.readFile(path.join(__dirname, 'public', 'messages.json'), 'utf8', (err, data) => {
        const messages = JSON.parse(data);
        res.render('json', { messages });
    });
});
// ADD
app.get('/add', function (req, res) {
    res.sendFile(path.join(__dirname, 'public', 'add.html'));
});
app.post('/add', (req, res) => {
    const filePath = path.join(__dirname, 'public', 'messages.json');

    // Read the JSON file and add a new message to it
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            res.status(500).send("Error reading the data file.");
            return;
        }
        let messages = JSON.parse(data);

        // Add the new message
        const { email, username, message } = req.body;
        messages.push({
            email,
            username,
            message
        });
        fs.writeFile(path.join(__dirname, 'public', 'messages.json'), JSON.stringify(messages, null, 2), (err) => {
            if (err) {
                res.status(500).send("Error saving the data file.");
                return;
            }
            //Redirect to json
            res.redirect('/json');
        });
    });
});


// ----------- Exercise 1 - Alkuperäinen -----------
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


// ----------- The End -----------
// 404 route
app.get('*', (req, res) => {
    res.status(404).send('Error, cannot find the page')
});

app.listen(PORT, () => {
    console.log('App listening to port: ' + PORT)
    console.log('http://localhost:'+PORT)
});
