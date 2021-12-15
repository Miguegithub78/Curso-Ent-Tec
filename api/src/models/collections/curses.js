const { Schema, model } = require("mongoose");

const cursosSchema = new Schema({
  

  title: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  day: [{
    type: String,
  }],

  time: [{
    type: String,
  }],

  duration:[{
    type: String,
  }],

  dayTime:[{
    type: String,
  }],

  image: {
    type: String,
    required: false, //
  },

  teacher : {
    type: Schema.Types.ObjectId,
    ref: "teachers",
  },

  students : [ {
    type: Schema.Types.ObjectId,
    ref: "students",
  }]


});

module.exports = model("courses", cursosSchema);