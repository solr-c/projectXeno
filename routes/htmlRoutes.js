var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("index.html", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/profiles/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("index.html", {
        example: dbExample
      });
    });
  });

   // Load example page and pass in an example by id
   app.get("/profiles/:id/tags", function(req, res) {
    db.Example.findOne({ where: { id: req.params.tags} }).then(function(dbExample) {
      res.render("index.html", {
        example: dbExample
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/profiles/:id/books", function(req, res) {
    db.Example.findOne({ where: { id: req.params.books} }).then(function(dbExample) {
      res.render("index.html", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
