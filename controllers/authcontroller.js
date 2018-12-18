var exports = module.exports = {};


exports.signup = function (req, res) {

  res.sendFile("test-signup.html", { root: __dirname});

};

exports.signin = function (req, res) {

  res.sendFile("test-signin.html", { root: __dirname});

};

exports.dashboard = function (req, res) {

  res.sendFile("index.html", { root: __dirname});

};

exports.logout = function (req, res) {

  req.session.destroy(function (err) {
    res.redirect('/');
  });

};