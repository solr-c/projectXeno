var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var db = require("../models");

router.get("/tags", function(req, res) {
  db.Tag.findAll(function(data){
  res.json(data);
  console.log("**controller tag list test**");
});

});

router.get("/user/:id/tags", function(req, res) {
    db.Tag.findAll(function(data){
    res.json(data);
    console.log("**controller user tag list test**");
  });
  
});

router.post("/tags", function(req, res) {
  db.Tag.create([
  "tag_name"
], [
  req.body.tag_name
], function(result) {
  console.log("**controller tag Post test**");
  // Send back the ID of the new quote
  res.json({ id: result.insertId });
});
});

router.post("/user/:id/tags", function(req, res) {
    db.User.create({
    mytags: res.body.tag_name
    }).then( function(result) {
      console.log(result);
    console.log("**controller user tag Post test**");
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
    res.redirect("/");
  });
});

router.put("/tags/:tag_id", function(req, res) {
  var condition = "tag_id = " + req.params.tag_id;
  console.log("**controller Put new tag into profile test**");
  console.log("condition", condition);

  userInfo.update({
    active_search: req.body.active_search,

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

router.delete("/tags/:tag_id", function(req, res) {
  var condition = "tag_id = " + req.params.tag_id;
  console.log("**controller tag Delete test**");
  userInfo.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/user/:id/tags/:tag_id", function(req, res) {
  var condition = "tag_id = " + req.params.tag_id;
  console.log("**controller tag Delete test**");
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