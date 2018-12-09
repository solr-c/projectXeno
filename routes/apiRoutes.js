var db = require("../models");

module.exports = function(app) {
  // Get all examples **still needs work**--only attached our db name into function
  app.get("/api/examples", function(req, res) {
    db.Example.findAll({}).then(function(ex_db) {
      res.json(ex_db);
    });
  });

  // Create a new example **still needs work**--only attached our db name into function
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(ex_db) {
      res.json(ex_db);
    });
  });

  // Delete an example by id **still needs work**--only attached our db name into function
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(ex_db) {
      res.json(ex_db);
    });
  });
};

