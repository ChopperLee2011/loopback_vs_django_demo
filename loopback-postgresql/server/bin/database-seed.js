var server = require('../server');
var dataSource = server.dataSources.psqlDS;
var Pokemon = server.models.pokemon;
var pokemons = [
  {
    "name": "Bulbasaur",
    "property": "Grass",
    "skill": ["Power Whip", "Leech Seed"]
  }
];
var count = pokemons.length;
dataSource.automigrate('pokemon', function (err) {
  if (err) throw err;
  pokemons.forEach(function (pokemon) {
    Pokemon.create(pokemon, function (err, result) {
      if (err) return;
      console.log('Record created:', result);
      count--;
      if (count === 0) {
        console.log('done');
        dataSource.disconnect();
      }
    })
  })
});