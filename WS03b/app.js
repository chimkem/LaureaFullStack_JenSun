const express = require("express");
const app = express();
const ejs = require("ejs");
const PORT = process.env.PORT || 3000;

// ----------- Exercise 1 -----------
app.set("views", `${__dirname}/views`)
app.set("view engine", "ejs")
app.use(express.static(`${__dirname}/public`))


// ----------- Exercise 2 -----------
const userdata = {
    user: "HotPotato0",
    prosentti: 82,
    motto: "Live, Laugh, Deadline!",
}
// ----------- Exercise 5 data, joka loopataan tauluun -----------
const data = [
    {
        user: "JormaABC",
        motto: "Häntä pystyyn vaikka hakaneulalla",
    },
    {
        user: "EinoLeino",
        motto: "Timanttia syntyy paineessa",
    },
    {
        user: "Karlita82",
        motto: "Se minkä voi tehdä tänään, on parempi aloittaa huomenna",
    },
    {
        user: "Juan123",
        motto: "Onks tänne pakko laittaa jotain???",
    },
];
// ----------- Exercise 4 -----------
let Kirjautunut = false;

app.get('/', (req, res) => {
    res.render('pages/index', { Kirjautunut, data:data, userdata:userdata });
});

// ----------- Testissä "toimiva" kirjautumisnappi -----------
app.post('/', (req, res) => {
    Kirjautunut = !Kirjautunut;
    res.render('pages/index', { Kirjautunut, data:data, userdata:userdata  });
});

// ----------- The End -----------
// 404 route
app.get('*', (req, res) => {
    res.status(404).send('Error, cannot find the page')
});

app.listen(PORT, () => {
    console.log('App listening to port: ' + PORT)
    console.log('http://localhost:'+PORT)
});