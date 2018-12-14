var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var userInfo = require("../models/user");

// Create all our routes and set up logic within those routes where required.
// router.get("/", function(req, res) {
//     userInfo.all(function(data) {
//     // Check to see intital data is good
//     // console.log(data);
//     var hbsObject = {
//       burgers: data
//     };
//     console.log(hbsObject);
//     res.render("index", hbsObject);
//   });
// });

router.get("/api/user/:id/books", function(req, res) {
    userInfo.all(function(data){
    res.json(data);
  });
  
});

router.post("/api/user/:id/books", function(req, res) {
    userInfo.create([
    "tag_name"
  ], [
    req.body.tag_name
  ], function(result) {
    console.log("**controller book Post test**");
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/user/:id/books/:id", function(req, res) {
  var condition = "tag_id = " + req.params.tag_id;
  console.log("**controller Put new tag into profile test**");
  console.log("condition", condition);

  userInfo.update({
    mytags: req.body.tag_name
    
  }, condition, function(result) {
    console.log("**controller book Update tag test**");
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      console.log("error with db");
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/profiles/:id/books/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  console.log("**controller book Delete test**");
  userInfo.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;