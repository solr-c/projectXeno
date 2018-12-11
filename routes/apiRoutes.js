var db = require("../models");

module.exports = function(app) {
  // Get all tags associated with profile **still needs work**--only attached our db name into function
  app.get("/api/profiles/tags", function(req, res) {
    db.Example.findAll({})
      .then(function(dbPost) {
       res.json(dbPost);
      });
  });

  // Create a new proifile **still needs work**--only attached our db name into function
  app.post("/api/profiles", function(req, res) {
    console.log(req.body);
    db.Example.create({
      userName: req.body.userName,
      password: req.body.password
    })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });

  // create a new tag
  app.post("/api/profiles/tags", function(req, res) {
    console.log(req.body);
    db.Example.create({
      tagName: req.body.tagName
    })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });

  // Delete an tag by id **still needs work**--only attached our db name into function
  app.delete("/api/tags/:id", function(req, res) {
    db.Example.destroy({ 
      where: { 
        id: req.params.id 
      } 
    })
      .then(function(dbPost) {
      res.json(dbPost);
    });
  });
};

