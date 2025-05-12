module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Service', {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      imageUrl: {
        type: DataTypes.STRING,
        allowNull: false
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      duration: {
        type: DataTypes.STRING,
        allowNull: true
      }
    });
  };
  