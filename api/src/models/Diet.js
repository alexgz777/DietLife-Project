const { DataTypes } = require("sequelize");
const sequelize = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("diet", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
      validate: {
        isUUID: {
          args: 4,
          msg: "Should have a proper id",
        },
      },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
