var mongoose = require("./connection");
var seedData = require("./seeds");

var Exercise = mongoose.model("Exercise");

Exercise.remove({}).then(function(){
  Exercise.collection.insert(seedData).then(function(){
    process.exit();
  });
});

module.exports = mongoose;
