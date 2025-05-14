module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "PortfolioItem",
    {
      title: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      imageUrl: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      style: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      tableName: "portfolioitems",
      freezeTableName: true,
    }
  );
};
