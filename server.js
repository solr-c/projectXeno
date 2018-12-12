var express = require("express");
var app = express();
var passport = require("passport");
var session = require("express-session");
var bodyParser = require("body-parser");
var env = require("dotenv").load();
var exphbs = require("express-handlebars");

//For BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// For Passport
app.use(session({ secret: "master chief",resave: true, saveUninitialized:true})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions


// // Import routes and give the server access to them.
// var routes = require("./controllers/authcontroller");

// app.use(routes);

// Import routes and give the server access to them.
var routes = require("./controllers/authcontroller");

app.use(routes);

var PORT = process.env.PORT || 5000;

app.get('/', function (req, res) {

  res.send('Welcome to Passport with Sequelize');

});

  //Models
  var models = require("./models");

  //Routes
  var authRoute = require("./routes/auth.js")(app, passport);


  //load passport strategies
  require("./config/passport/passport")(passport, models.user);

//Sync Database
models.sequelize.sync().then(function() {
  console.log("Nice! Database looks fine");
}).catch(function(err) {
  console.log(err, "Something went wrong with the Database Update!");
});


app.listen(PORT, function(err) {
  if (!err) console.log("Site is live. ", "Server listening on: http://localhost:" + PORT);
  else console.log(err);
});
