var db = require("../models");

module.exports = function(api) {
  
  // Get all tags associated with profile **still needs work**--only attached our db name into function
  api.get("/api/tags", function(req, res) {
    console.log("**controller apiRoutes tags GET test**");
    db.Example.findAll({})
      .then(function(dbPost) {
       res.json(dbPost);
      });
  });

  // Get all tags associated with profile **still needs work**--only attached our db name into function
  api.get("/api/books", function(req, res) {
    console.log("**controller apiRoutes books GET test**");
    db.Example.findAll({})
      .then(function(dbPost) {
       res.json(dbPost);
      });
  });

  // Get all tags associated with profile **still needs work**--only attached our db name into function
  api.get("/api/user/:id/tags", function(req, res) {
    console.log("**controller apiRoutes user tags GET test**");
    db.Example.findAll({})
      .then(function(dbPost) {
       res.json(dbPost);
      });
  });

   // Get all tags associated with profile **still needs work**--only attached our db name into function
   api.get("/api/user/:id/books", function(req, res) {
    console.log("**controller apiRoutes user books GET test**");
    db.Example.findAll({})
      .then(function(dbPost) {
       res.json(dbPost);
      });
  });

  // Create a new proifile **still needs work**--only attached our db name into function
  api.post("/api/user", function(req, res) {
    console.log(req.body);
    console.log("**controller apiRoutes user POST test**");
    db.Example.create({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      username: req.body.username,
      password: req.body.password,
      email: req.body.email
    })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });

  // create a new tag **still needs work**
  api.post("/api/tags", function(req, res) {
    console.log(req.body);
    console.log("**controller apiRoutes tag POST test**");
    db.Example.create({
      tagName: req.body.tagName
    })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });

  // create a new user tag **still needs work**
  api.post("/api/user/:id/tags/:tag_id", function(req, res) {
    console.log(req.body);
    console.log("**controller apiRoutes user tag POST test**");
    db.Example.create({
      tagName: req.body.tagName
    })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });

  // save a book to table **still needs work**
  api.post("/api/books", function(req, res) {
    console.log(req.body);
    console.log("**controller apiRoutes book POST test**");
    db.Example.create({
      book_name: req.body.book_name,
      book_apiId: req.body.book_apiId
    })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });

  // create a new user tag **still needs work**
  api.post("/api/user/:id/books/:book_index", function(req, res) {
    console.log(req.body);
    console.log("**controller apiRoutes user tag POST test**");
    db.Example.create({
      book_index: req.body.book_index
    })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });

  // Delete an tag by id **still needs work**
  api.delete("/api/user/:id", function(req, res) {
    console.log("**controller apiRoutes user tag DELETE test**");
    db.Example.destroy({ 
      where: { 
        id: req.params.id 
      } 
    })
      .then(function(dbPost) {
      res.json(dbPost);
    });
  });

  // Delete an users tag by id **still needs work**
  api.delete("/api/user/:id/tags/:tag_id", function(req, res) {
    console.log("**controller apiRoutes user tag DELETE test**");
    db.Example.destroy({ 
      where: { 
        id: req.params.id,
        tag_id: req.body.tag_id 
      } 
    })
      .then(function(dbPost) {
      res.json(dbPost);
    });
  });

  // Delete an users book by id **still needs work**
  api.delete("/api/user/:id/books/:bookId", function(req, res) {
    console.log("**controller apiRoutes user book DELETE test**");
    db.Example.destroy({ 
      where: { 
        id: req.params.id,
        bookId: req.body.book_index 
      } 
    })
      .then(function(dbPost) {
      res.json(dbPost);
    });
  });

  // Delete a book by id **still needs work**
  api.delete("/api/books/:bookId", function(req, res) {
    console.log("**controller apiRoutes book DELETE test**");
    db.Example.destroy({ 
      where: { 
        id: req.params.id,
        bookId: req.body.book_index 
      } 
    })
      .then(function(dbPost) {
      res.json(dbPost);
    });
  });

   // Delete an users book by id **still needs work**
  api.delete("/api/tags/:tag_id/", function(req, res) {
    console.log("**controller apiRoutes tag DELETE test**");
    db.Example.destroy({ 
      where: { 
        id: req.params.id,
        bookId: req.body.book_index 
      } 
    })
      .then(function(dbPost) {
      res.json(dbPost);
    });
  });

};


