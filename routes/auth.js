var authController = require('../controllers/authcontroller');

module.exports = function (app, passport) {

  app.get('/test-signup.html', authController.signup);


  app.get('/test-signin.html', authController.signin);


  app.post('/test-signup.html', passport.authenticate('local-signup', {
    successRedirect: '/index.html',
    failureRedirect: '/test-signup.html'
  }
  ));


  app.get('/index.html', isLoggedIn, authController.dashboard);


  app.get('/logout', authController.logout);


  app.post('/test-signin.html', passport.authenticate('local-signin', {
    successRedirect: '/index.html',
    failureRedirect: '/test-signin.html'
  }
  ));


  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
      return next();

    res.redirect('/test-signup.html');
  }


}