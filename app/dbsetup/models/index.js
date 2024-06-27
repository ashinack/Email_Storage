const dbConfig = require("../db.config");

const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  dbConfig.db,
  dbConfig.username,
  dbConfig.password,
  dbConfig.main_db_options
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Email = require("./email.model")(sequelize, Sequelize);

module.exports = db;
