const { fetchBreedDescription } = require('./breedFetcher');
let breedName = process.argv[2];

fetchBreedDescription(breedName, (error, response, body) => {
  const data = JSON.parse(body);
  if (error) {
    console.log('Error:', error);
  } else if (data[0] === undefined) {
    console.log('Breed name is not found');
  } else {
    console.log(data[0].description);
  }
});