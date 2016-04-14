var mongoose = require("mongoose");

var ObjectId = mongoose.Schema.Types.ObjectId;
var ExerciseSchema = new Schema(

 {
   name: String,
  imageUrl: String,
  benefits: String
}

);

mongoose.model("Exercise", ExerciseSchema);
mongoose.connect("mongodb://localhost/minutex");
