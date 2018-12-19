var authController = require('../controllers/authcontroller');

module.exports = function (app, passport) {

  app.get('/', authController.signup);


  app.get('/signIn', authController.signin);


  app.post('/', passport.authenticate('local-signup', {
    successRedirect: '/index.html',
    failureRedirect: '/test-signup.html'
  }
  ));


  app.get('/apiPage', isLoggedIn, authController.dashboard);


  //no file for this
  app.get('/logout', authController.logout);


  app.post('/signIn', passport.authenticate('local-signin', {
    successRedirect: '/index.html',
    failureRedirect: '/test-signin.html'
  }
  ));


  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
      return next();

    res.redirect('/');
  }


}