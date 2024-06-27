module.exports = (sequelize, Sequelize) => {
  const Email = sequelize.define("email", {
    id: {
      type: Sequelize.INTEGER,
      field: "id",
      autoIncrement: true,
      primaryKey: true,
    },
    email: {
      type: Sequelize.STRING,
      field: "email",
      allowNull: false,
      unique: true,
    },
  });
  return Email;
};
