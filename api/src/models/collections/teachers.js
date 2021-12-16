const { Schema, model } = require("mongoose");

const teachersSchema = new Schema({
  
  name: {
    type: String,
    required: true,
  },

  image: {
    type: String,
    required: false, //
  },

  courses: [
    {
      type: Schema.Types.ObjectId,
      ref: "courses",
      autopopulate: true,
    },
  ],

});

module.exports = model("teachers", teachersSchema);