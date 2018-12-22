var express = require("express");
var app = express();
var passport = require("passport");
var session = require("express-session");
var bodyParser = require("body-parser");
var env = require("dotenv").load();

//For BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));

// For Passport
app.use(session({ secret: "master chief",resave: true, saveUninitialized:true})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});



var PORT = process.env.PORT || 5000;


  //Models
  var db = require("./models");

  //Routes
  require("./routes/auth")(app, passport);
  require("./routes/htmlRoutes")(app);
  require("./routes/apiRoutes")(app);
  


  //load passport strategies
  require("./config/passport/passport")(passport, db.user);

//Sync Database
db.sequelize.sync().then(function() {
  console.log("Nice! Database looks fine");
  app.listen(PORT, function(err) {
    if (!err) console.log("Site is live. ", "Server listening on: http://localhost:" + PORT);
    else console.log(err);
  });
}).catch(function(err) {
  console.log(err, "Something went wrong with the Database Update!");
});



