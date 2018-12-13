var exports = module.exports = {};


exports.signup = function (req, res) {

  res.sendfile('test-signup');

};

exports.signin = function (req, res) {

  res.sendfile('test-signin');

};

exports.dashboard = function (req, res) {

  res.sendfile('test-index');

};

exports.logout = function (req, res) {

  req.session.destroy(function (err) {
    res.redirect('/');
  });

};