const Planet = require("../models/Planet");
const Spaceship = require("../models/Sapceship");
const Satelite = require("../models/Satelite");
const Cap = require("../models/cap");

/*Planet.hasOne(Satelite, { onDelete: "CASCADE", onUpdete: "CASCADE" });
Satelite.belongsTo(Planet, { foreingKey: "planetId", as: "planet" });
*/
Planet.hasMany(Satelite, { onDelete: "CASCADE", onUpdete: "CASCADE" });
Satelite.belongsTo(Planet, { foreingKey: "planetId", as: "planet" });

Cap.belongsToMany(Spaceship, {
  foreingKey: "capId",
  through: "capSpaceship",
  as: "spaceships",
});
Spaceship.belongsToMany(Cap, {
  foreingKey: "spaceshipId",
  through: "capSpaceship",
  as: "caps",
});

module.exports = { Planet, Satelite };
