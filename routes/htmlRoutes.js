var db = require("../models");
var path = require("path");

module.exports = function(app) {
 

// get the signup html page
app.get('/', function (req, res) {

  res.sendFile(path.join(__dirname, "../public/test-signup.html"));

});
// get the signin html page
app.get("/signIn", function (req,res) {

  res.sendFile(path.join(__dirname, "../public/test-signin.html"));
});
// get the search html page
app.get("/apiPage", function (req, res) {

  res.sendFile(path.join(__dirname, "../public/index.html"));

});
// Render 404 page for any unmatched routes
app.get("*", function(req, res) {
  res.send("You have hit an error!!");
});

};
