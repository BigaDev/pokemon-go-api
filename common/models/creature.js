module.exports = function(Creature) {
  Creature.isPikachu = function(creatureId, cb) {
    Creature.find({ where: {_id: creatureId} }, function (err, creature) {
      console.log(creature);
      if(err)
        return cb(err);
      if(creature && creature.length == 0)
        return cb(404)
      if(creature && creature.length > 0 && creature[0].name == "Pikachu")
        return cb(null, true);
      return cb(null, false);
    });
  };
  Creature.remoteMethod(
    'isPikachu',
    {
      http: {path: '/isPikachu', verb: 'get'},
      accepts: {arg: 'id', type: 'string', http: { source: 'query' } },
      returns: {arg: 'isPikachu', type: 'boolean'}
    }
  );
};
