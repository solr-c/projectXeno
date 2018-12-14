var db = require("../models");

module.exports = function(app) {
  // Get all users **still needs work**
  app.get("/api/users", function(req, res) {
    db.Example.findAll({})
      .then(function(dbPost) {
       res.json(dbPost);
      });
  });

  // Get all users tags **still needs work**
  app.get("/api/users/:id/tags", function(req, res) {
    db.Example.findAll({})
      .then(function(dbPost) {
       res.json(dbPost);
      });
  });

  // Get all users books **still needs work**
  app.get("/api/users/:id/books", function(req, res) {
    db.Example.findAll({})
      .then(function(dbPost) {
       res.json(dbPost);
      });
  });

  // Create a new user profile **still needs work**
  app.post("/api/users", function(req, res) {
    console.log(req.body);
    db.Example.create({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      mybooks: req.body.mybooks,
      mytags: req.body.mytags

    })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });

  // create a new tag to add to table **still needs work**
  app.post("/api/tags", function(req, res) {
    console.log(req.body);
    db.Example.create({
      tag_name: req.body.tag_name
    })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });

  // create a new book to add to table **still needs work**
  app.post("/api/books", function(req, res) {
    console.log(req.body);
    db.Example.create({
      book_name: req.body.book_name,
      book_apiId: req.body.book_apiId
    })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });

  // create a new tag to add to profile **still needs work**
  app.post("/api/users/:id/tags", function(req, res) {
    console.log(req.body);
    db.Example.create({
      mytags: req.body.tag_name
    })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });

  // save a book to profile **still needs work**
  app.post("/api/users/:id/books", function(req, res) {
    console.log(req.body);
    db.Example.create({
      mybooks: req.body.book_name,
    })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });

  // Delete a user by id **still needs work**
  app.delete("/api/user/:id", function(req, res) {
    db.Example.destroy({ 
      where: { 
        id: req.params.id 
      } 
    })
      .then(function(dbPost) {
      res.json(dbPost);
    });
  });

  // Delete a users tag by id **still needs work**
app.delete("/api/user/:id/tags/:id", function(req, res) {
  db.Example.destroy({ 
    where: { 
      mytags: req.params.tag_id
    } 
  })
    .then(function(dbPost) {
    res.json(dbPost);
  });
});
  
  // Delete a users book by id **still needs work**
  app.delete("/api/user/:id/books/:id", function(req, res) {
    db.Example.destroy({ 
      where: { 
        mybooks: req.params.book_index
      } 
    })
      .then(function(dbPost) {
      res.json(dbPost);
    });
  });
  
};



