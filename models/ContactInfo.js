module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "ContactInfo",
    {
      address: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      mapEmbedUrl: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      instagram: DataTypes.STRING,
      facebook: DataTypes.STRING,
      tiktok: DataTypes.STRING,
    },
    {
      tableName: "contactinfos",
      freezeTableName: true,
    }
  );
};
