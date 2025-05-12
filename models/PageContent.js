module.exports = (sequelize, DataTypes) => {
    return sequelize.define('PageContent', {
      page: {
        type: DataTypes.STRING,
        allowNull: false
      },
      section: {
        type: DataTypes.STRING,
        allowNull: false
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false
      }
    });
  };
  