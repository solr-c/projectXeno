var db = require("../models");

module.exports = function(page) {
  // Load index page
  page.get("/", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("test-signup.html", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  // Load example page and pass in an example by id
  page.get("/user/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("index.html", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  page.get("*", function(req, res) {
    res.render("404");
  });
};
