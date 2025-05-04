const express = require('express');
const User = require('../models/user');

const router = express.Router();

// GET || Return all documents in the collection || URL: /api/getall
router.get('/getall', async (req, res) => {
  try {
    const users = await User.find();
      // Testausta varten: console.log("Results: ",users);
      res.status(200).json({message: 'GET request succesfull', users});
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch items' });
  }
});

// GET || Return one item with the given ID || URL: /api/:id
router.get('/:id', async (req, res) => {
  try {
    const userID = req.params.id;
    const user = await User.findById(userID);
    
    res.status(200).json({ message: 'GET request succesfull', user});
    // Testausta varten: console.log('Request Id:', user);

  } catch (error) {
    res.status(404).json({ error: '404 Not Found' });
  }
});

// POST || Create a new document in the collection || URL: /api/add
router.post('/add', async (req, res) => {
  try {
    const newUser = new User({
      username: "HuRRyPotter",
      nickname: "Anna", 
      job: "Ompelija",
      number: "045 6723 12"
    });
    
    const results = await User.insertOne(newUser);
    res.status(200).json({ message: 'POST request succesfull', results});
    console.log('Added the following information:', results);

  } catch (error) {
    res.status(400).json({ error: '400 Bad Request' });
  }
});

// PUT/PATCH || Update the document with the given ID || URL: /api/update/:id
router.patch('/update/:id', async (req, res) => {
  try {
    const userID = req.params.id;
    const update = { job: 'Meripoliisi'};
    await User.findOneAndUpdate(userID, update, {new: true});

    res.status(200).json({ message: 'PATCH request succesfull'});
    console.log('Changed the following information:', updated);
    } catch (error) {
    res.status(501).json({ error: '501 Not Implemented' }); // En saanut korjattua ennen deadlinea
  }});

// DELETE || Delete the item with the given ID || URL: /api/delete/:id
router.delete('/delete/:id', async (req, res) => {
  try {
    const userID = req.params.id;
    await User.findByIdAndDelete(userID)

    res.status(200).json({ message: 'DELETE request succesfull', userID});
  } catch (error) {
    res.status(400).json({ error: '400 Bad Request' });
}});


module.exports = router;