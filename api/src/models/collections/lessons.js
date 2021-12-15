const { Schema, model } = require("mongoose");

const lessonsSchema = new Schema({
  
  course: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "cursos"
  },

  student: {
    type: Schema.Types.ObjectId,
    required: true,
  },

  teacher: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "teachers",
  },

  date: {
    type: String,
    required: true,
  },

  time: {
    type: String,
  },

  duration:{
    type: Number,
    required: true,
  }
});

module.exports = model("lessons", lessonsSchema);