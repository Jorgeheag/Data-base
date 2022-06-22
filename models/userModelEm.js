const { db, DataTypes } = require("../utils/databaseUtils");

const Employee = db.define("registration", {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  entranceTime: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  exitTime: {
    type: DataTypes.DATE,
    allowNull: false,  },

  status: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "Out",
  },
});

module.exports = { Employee };
