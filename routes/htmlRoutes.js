var db = require("../models");

module.exports = function(app) {
  // Load index page
  var db = require("../models");

// get the signup html page
app.get('/', function (req, res) {

  res.sendFile("test-signup.html", { root: __dirname});

});
// get the signin html page
app.get("/signIn", function (req,res) {

  res.sendFile("test-signin.html", { root: __dirname});
});
// get the search html page
app.get("/apiPage", function (req, res) {

  res.sendFile("index.html", { root: __dirname});

});
// Render 404 page for any unmatched routes
app.get("*", function(req, res) {
  res.send("You have hit an error!!");
});

};
