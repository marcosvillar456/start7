const { DataTypes } = require("sequelize");

module.exports = (db) => {
  db.define("User", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: {
          msg: "El email tiene que ser un correo valido",
        },
      },
    },
    password: {
      type: DataTypes.STRING(64),
      allowNull: false,
    },
  });
};
