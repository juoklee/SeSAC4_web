const Sequelize = require("sequelize");

const config = require("../config/config.json")["development"];

const db = {};
const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
)

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Visitor.js 모델의 (Sequelize, DataTypes)
db.Visitor = require("./Visitor")(sequelize, Sequelize);

module.exports = db;