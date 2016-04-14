var express   = require("express");
var hbs       = require("express-handlebars");
var parser    = require("body-parser");
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
  Exercise.find({}).then(function(exercises){
    res.render("index", {
      exercises: exercises
    });
  });
});

app.get("/exercises/:name", function(req, res){
  Exercise.findOne({name: req.params.name}).then(function(response){
    res.render("show", {
      exercise: response

    });
  });
});


app.post("/exercises", function(req, res){
  Exercise.create(req.body.exercise).then(function(exercise){
    res.redirect("/exercises/"+ exercise.name);
  });
});






app.listen(app.get("port"), function(){
  console.log("I am here!");
});
