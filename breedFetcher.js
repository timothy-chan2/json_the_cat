const request = require('request');
let breed = process.argv.slice(2);

request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
  const data = JSON.parse(body);
  if (error) {
    console.log('Error:', error);
  } else if (data[0] === undefined) {
    console.log('Breed name is not found');
  } else {
    console.log(data[0].description);
  }
});