const Sequelize = require("sequelize");
module.exports = new Sequelize("ad_site_development", "postgres", "123456", {
  host: "localhost",
  dialect: "postgres",
});
