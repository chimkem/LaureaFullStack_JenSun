// Task 1: Create a REST API with at Least 5 Routes
// Task 3: Test Your API with POSTMAN || Kuvat Löytyy Dokumentaatiosta
// Task 4: Implement Error Handling || En ole varma riittävätkö nämä errorien suhteen, mutta lisäsin nyt jotain...
// Task 5: Add Documentation || Valmis
const express = require('express');
const User = require('../models/user');
const router = express.Router();

// GET || Return all documents in the collection || URL: /api/getall
router.get('/getall', async (req, res) => {
  try {
    const users = await User.find(); // Haetaan kaikki dokumentit databasesta
      // Testausta varten: console.log("Results: ",users);
      // Palautetaan viesti, jossa kerrotaan onnistumisesta ja sen jälkeen tulostetaan tulokset
      res.status(200).json({message: 'GET - request succesfull', users}); 
  } catch (error) { // Error
    res.status(500).json({ error: '500 - Failed to fetch items' });
  }
});

// GET || Return one item with the given ID || URL: /api/:id
router.get('/:id', async (req, res) => {
  try {
    const userID = req.params.id; // Otetaan id polusta
    const user = await User.findById(userID); // Haetaan käyttäjä ID:n avulla

    // Palautetaan viesti, jossa kerrotaan onnistumisesta ja sen jälkeen tulostetaan tulokset
    res.status(200).json({ message: 'GET - request succesfull', user}); 
    // Testausta varten: console.log('Request Id:', user);

  } catch (error) { // Error, käyttäjää ei löydy
    res.status(404).json({ error: '404 - User not Found' });
  }
});

// POST || Create a new document in the collection || URL: /api/add
router.post('/add', async (req, res) => {
  try {
    const newUser = new User({ // Luodaan uusi käyttäjä seuraavilla tiedoilla
      username: "HuRRyPotter",
      nickname: "Anna", 
      job: "Ompelija",
      number: "045 6723 12"
    });
    
    const results = await User.insertOne(newUser); // Viedään tulokset uuteen dokumenttiin
    // Palautetaan viesti, jossa kerrotaan onnistumisesta ja sen jälkeen tulostetaan tulokset
    res.status(200).json({ message: 'POST - request succesfull', results}); 
    // Testausta varten: console.log('Added the following information:', results);

  } catch (error) { // En tiedä olisiko tähän sopinut paremmin statuskoodi 500
    res.status(400).json({ error: '400 - Bad Request' });
  }
});

// PUT/PATCH || Update the document with the given ID || URL: /api/update/:id
router.patch('/update/:id', async (req, res) => {
  try {
    const userID = req.params.id;
    const user = await User.findById(userID); // Etsitään käyttäjä ID:n perusteella

    const update = 'Meripoliisi'; // Päivitetään työnkuva meripoliisiksi
    await User.findOneAndUpdate( // haetaan ja päivitetään käyttäjä
      user, 
      { $set: { job: update }}); // New:true palauttaa originaalin dokumentin sijasta päivitetyn version

    // Palautetaan viesti; mitä päivitettiin ja minne
    res.status(200).json({ message: 'PATCH - request succesfull', for_User: user.username, updated_Job: update,});
    // Testausta varten: console.log('Job updated to',update,'for the user: ',user.username); 
    } catch (error) { // Error, ei löydy
    res.status(404).json({ error: '404 - User with this ID not found' });
  }});

// DELETE || Delete the item with the given ID || URL: /api/delete/:id
router.delete('/delete/:id', async (req, res) => {
  try {
    const userID = req.params.id;
    // Halusin kokeilla saisinko delete:n palauttamaanb kaksi eri versiota. Ilman tätä kohtaa delete johti aina onnistumiseen, jos ID on ollut toiminnassa aiemmin.
    // Varmasti tämäkin onnistuisi paljon helpommalla tyylillä. :D
    const isthere = await User.findByIdAndDelete(userID); 

    if (!isthere) { // Jos käyttäjää ei ollut enää databasessa (aiemmin poistettu), palautetaan tämä
      return res.status(404).json({ error: '410 - User with this ID is already deleted' }); 
    }
    // Jos käyttäjä oli databasessa ja se saatiin poistettua, palautetaan viesti;
    res.status(200).json({ message: 'DELETE - request succesfull', userID});
  } catch (error) {  // Error, koska käyttäjää ei koskaan ole ollut databasessa
    res.status(404).json({ error: '404 - User not found' });
}});


module.exports = router;