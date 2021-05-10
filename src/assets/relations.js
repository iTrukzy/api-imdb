const {
  Actors,
  Directors,
  Generes,
  Contents,
  ContentGeneres,
  ContentDirectors,
  ContentActors,
} = require("../models");


ContentActors.belongsTo(Actors, {foreignKey: "actor_id"})
ContentActors.belongsTo(Contents, {foreignKey: 'content_id'})

ContentDirectors.belongsTo(Contents, {foreignKey: 'content_id'})
ContentDirectors.belongsTo(Directors, {foreignKey: 'director_id'})

ContentGeneres.belongsTo(Contents, {foreignkey:"content_id"})
ContentGeneres.belongsTo(Generes, {foreignKey: 'genere_id'})

Actors.belongsToMany(Contents, {through: 'ContentActors', foreignKey: 'actor_id'})
Contents.belongsToMany(Actors, {through: 'ContentActors', foreignKey: 'actor_id'})

Directors.belongsToMany(Contents, {through: 'ContentDirectors', foreignKey: 'director_id'})
Contents.belongsToMany(Directors, {through: 'ContentDirectors', foreignKey: 'director__id'})

Generes.belongsToMany(Contents, {through: 'ContentGeneres', foreignKey: 'genere_id'})
Contents.belongsToMany(Generes, {through: 'ContentGeneres', foreignKey: 'genere_id'})
