module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "Reel",
    {
      url: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      caption: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      tableName: "reels",
      freezeTableName: true,
    }
  );
};
