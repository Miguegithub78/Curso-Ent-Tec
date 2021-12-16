const { Schema, model } = require("mongoose");

const studentsSchema = new Schema({
  
  name: {
    type: String,
    required: true,
  },

  image: {
    type: String,
    required: false, //
  },

  courses: [{
    type: Schema.Types.ObjectId,
    ref: "courses",
  }]

});

module.exports = model("students", studentsSchema);