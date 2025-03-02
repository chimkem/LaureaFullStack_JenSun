const axios = require('axios');
// GET pokemon API data using Axios
axios.get('https://pokeapi.co/api/v2/pokemon/charmander')
  .then(response => {
    console.log(`Pokemon name: ${response.data.name}`);
    console.log(`Type: ${response.data.types[0].type.name}`);
  })
  .catch(error => {
    console.error(error.message);
});