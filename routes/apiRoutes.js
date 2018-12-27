var db = require("../models");

module.exports = function(api) {

  console.log("This export (api) requires ../models");

  // Get all tags associated with profile **still needs work**--only attached our db name into function
  api.get("/api/user", function(req, res) {
    console.log("**routes apiRoutes user GET test**");
    db.User.findAll({})
      .then(function(dbPost) {
       res.json(dbPost);
      });
  });
  
  // Get all tags associated with profile **still needs work**--only attached our db name into function
  api.get("/api/tags", function(req, res) {
    console.log("**routes apiRoutes tags GET test**");
    db.Tag.findAll({})
      .then(function(dbPost) {
       res.json(dbPost);
      });
  });

  // Get all tags associated with profile **still needs work**--only attached our db name into function
  api.get("/api/books", function(req, res) {
    console.log("**routes apiRoutes books GET test**");
    db.Book.findAll({})
      .then(function(dbPost) {
       res.json(dbPost);
      });
  });

  // Get all tags associated with profile **still needs work**--only attached our db name into function
  api.get("/api/user/:id/tags", function(req, res) {
    console.log("**routes apiRoutes user tags GET test**");
    db.User.findAll({mytags:1})
      .then(function(dbPost) {
       res.json(dbPost);
      });
  });

   // Get all books associated with profile **still needs work**--only attached our db name into function
   api.get("/api/user/:id/books", function(req, res) {
    console.log("**routes apiRoutes user books GET test**");
    db.User.findAll({mybooks:1})
      .then(function(dbPost) {
       res.json(dbPost);
      });
  });

  // Create a new profile 
  api.post("/api/user", function(req, res) {
    console.log(req.body);
    console.log("**routes apiRoutes user POST test**");
    db.User.create({
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
    console.log("**routes apiRoutes tag POST test**");
    db.Tag.create({
      tag_name: req.body.tag_name
    })
      .then(function(dbPost) {
        console.log("**routes apiRoutes tags dbPost POST test**");
        res.json(dbPost);
      });
  });

  // create a new user tag **still needs work**
  api.post("/api/user/:id/tags/:tag_id", function(req, res) {
    console.log(req.body);
    console.log("**controller apiRoutes user tag POST test**");
    db.User.create({
      id: req.body.id,
      mytags: req.body.tag_name
    })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });

  // save a book to table **still needs work**
  api.post("/api/books", function(req, res) {
    console.log(req.body);
    console.log("**controller apiRoutes book POST test**");
    db.Book.create({
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
    db.User.create({
      id: req.body.id,
      mybooks: req.body.book_index
    })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });

  // Delete an tag by id **still needs work**
  api.delete("/api/user/:id", function(req, res) {
    console.log("**controller apiRoutes user tag DELETE test**");
    db.User.destroy({ 
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
    db.User.destroy({ 
      where: { 
        id: req.params.id,
        mytags: req.body.tag_id 
      } 
    })
      .then(function(dbPost) {
      res.json(dbPost);
    });
  });

  // Delete an users book by id **still needs work**
  api.delete("/api/user/:id/books/:bookId", function(req, res) {
    console.log("**controller apiRoutes user book DELETE test**");
    db.User.destroy({ 
      where: { 
        id: req.params.id,
        mybooks: req.body.book_index 
      } 
    })
      .then(function(dbPost) {
      res.json(dbPost);
    });
  });

  // Delete a book by id **still needs work**
  api.delete("/api/books/:bookId", function(req, res) {
    console.log("**controller apiRoutes book DELETE test**");
    db.Book.destroy({ 
      where: { 
        book_index: req.body.book_index 
      } 
    })
      .then(function(dbPost) {
      res.json(dbPost);
    });
  });

   // Delete an users tag by id **still needs work**
  api.delete("/api/tags/:tag_id", function(req, res) {
    console.log("**controller apiRoutes tag DELETE test**");
    db.Book.destroy({ 
      where: { 
        bookId: req.body.book_index 
      } 
    })
      .then(function(dbPost) {
      res.json(dbPost);
    });
  });

};


