var authController = require("../controllers/authcontroller");

module.exports = function(app) {
  app.get("/signup", authController.signup);
};
