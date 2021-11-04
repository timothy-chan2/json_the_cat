
const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, res, body) => {
      // we expect no error for this scenario
      assert.equal(err, null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      // compare returned description
      const data = JSON.parse(body);
      assert.equal(expectedDesc, data[0].description.trim());

      // Needed to let framework know test is completed since it's an asynchronous function
      done();
    });
  });

  it('returns a string "Breed name is not found" for invalid/non-existent breed, via callback', (done) => {
    fetchBreedDescription('Snake', (err, res, body) => {
      // we expect no error for this scenario
      assert.equal(err, null);

      const expectedDesc = undefined;

      // compare returned description
      const data = JSON.parse(body);
      assert.equal(expectedDesc, data[0]);

      // Needed to let framework know test is completed since it's an asynchronous function
      done();
    });
  });
});