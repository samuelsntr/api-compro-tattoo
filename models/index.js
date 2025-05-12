const { Sequelize, DataTypes } = require('sequelize');
const dbConfig = require('../config/db.config');

const sequelize = new Sequelize(
  dbConfig.DB,
  dbConfig.USER,
  dbConfig.PASSWORD,
  {
    host: dbConfig.HOST,
    dialect: dbConfig.DIALECT,
    port: dbConfig.PORT,
    operatorsAliases: false,
    pool: dbConfig.pool,
    logging: false,
  }
);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Import models
db.User = require('./User')(sequelize, DataTypes);
db.Service = require('./Service')(sequelize, DataTypes);
db.PortfolioItem = require('./PortfolioItem')(sequelize, DataTypes);
db.PageContent = require('./PageContent')(sequelize, DataTypes);
db.ContactInfo = require('./ContactInfo')(sequelize, DataTypes);
db.Reel = require('./Reel')(sequelize, DataTypes);

module.exports = db;
