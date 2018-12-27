
var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var userInfo = require("../models/index");

router.get("/api/users", function(req, res) {
    userInfo.all(function(data){
    res.json(data);
  });

});

router.post("/api/user", function(req, res) {
    userInfo.create([
    "firstname", "lastname",
    "username", "email"
  ], [
    req.body.tag_name
  ], function(result) {
    console.log("**controller user Post test**");
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
  });

  router.put("/api/user/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    console.log("**controller Put update profile test**");
    console.log("condition", condition);
  
    userInfo.update({
      username: req.body.username
      
    }, condition, function(result) {
      console.log("**controller Update tag name test**");
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        console.log("error with db");
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });