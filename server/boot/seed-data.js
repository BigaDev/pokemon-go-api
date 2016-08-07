module.exports = function(app) {
  app.dataSources.db.automigrate('Creature', function(err) {
    if (err) throw err;

    app.models.Creature.create([
      {name: 'Bulbasaur'},
      {name: 'Charmander'},
      {name: 'Pikachu'},
    ], function(err, creatures) {
      if (err) throw err;

      console.log('Models created: \n', creatures);
    });
  });
};
