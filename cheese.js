const { Sequelize, sequelize } = require("./db");

// defines the Cheese model
let Cheese = sequelize.define("cheese", {
  title: Sequelize.STRING,
  description: Sequelize.STRING,
});

module.exports = {
  Cheese,
};
