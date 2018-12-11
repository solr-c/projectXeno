"use strict";
var orm = require("../config/orm");

var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");
var env = process.env.NODE_ENV || "development";
var config = require(path.join(__dirname, '..', 'config', 'config.json'))[env];
var sequelize = new Sequelize(config.database, config.username, config.password, config);
var db = {};


// fs
//   .readdirSync(__dirname)
//   .filter(function (file) {
//     return (file.indexOf(".") !== 0) && (file !== "index.js");
//   })
//   .forEach(function (file) {
//     var model = sequelize.import(path.join(__dirname, file));
//     db[model.name] = model;
//   });

// Object.keys(db).forEach(function (modelName) {
//   if ("associate" in db[modelName]) {
//     db[modelName].associate(db);
//   }
// });

var tags = {
  all: function(cb) {
    orm.all("tags", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("tags", cols, vals, function(res) {
      console.log("**burger js Create test**");
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("tags", objColVals, condition, function(res) {
      console.log("**burger js Update test**");
      cb(res);
    });
  },
  delete: function(condition, cb) {
    orm.delete("tags", condition, function(res) {
      console.log("**burger js Delete test**");
      cb(res);
    });
  }
};


db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;