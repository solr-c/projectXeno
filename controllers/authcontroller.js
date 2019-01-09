var path = require("path");
var exports = module.exports = {};


exports.signup = function (req, res) {

  res.sendFile(path.join(__dirname, "../public/test-signup.html"));

};

exports.signin = function (req, res) {

  res.sendFile(path.join(__dirname, "../public/test-signin.html"));

};

exports.dashboard = function (req, res) {

  res.sendFile(path.join(__dirname, "../public/index.html"));

};

exports.logout = function (req, res) {

  req.session.destroy(function (err) {
    res.redirect('/');
  });

};