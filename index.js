var express   = require("express");
var hbs       = require("express-handlebars");
var mongoose  = require("./db/connection");

var app = express();

var Exercise = mongoose.model("Exercise");

app.set("port", process.env.PORT || 3001);
app.set("view engine", "hbs");
app.engine(".hbs", hbs({
  extname:    ".hbs",
  partialsDir: "views/",
  layoutsDir:   "views/",
  defaultLayout:  "layout-main"
}));
app.use("/assets", express.static("public"));



app.get("/", function(req, res){
  res.render("app-welcome");
});

app.get("/exercises", function(req, res){
  Exercise.find({}.then(function(exercises){
    res.render("index", {
      exercises: exercises
    });
  }));
});



app.listen(app.get("port"), function(){
  console.log("I am here!");
});
