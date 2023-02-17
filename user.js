const { Sequelize, sequelize } = require("./db");

// defines the User model
let User = sequelize.define("user", {
  name: Sequelize.STRING,
  email: Sequelize.STRING,
});

module.exports = {
  User,
};
