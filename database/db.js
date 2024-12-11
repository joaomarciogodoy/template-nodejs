const Sequelize = require("sequelize");

const conn = new Sequelize("blog_restitui", "root", "!#*Aa40028922", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = conn;
