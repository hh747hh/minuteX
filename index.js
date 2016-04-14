var express = require("express");


var app = express();

app.get("/", function(req, res){
  console.log("Hello");
});





app.listen(3001, function(){
  console.log("I am here!");
});
