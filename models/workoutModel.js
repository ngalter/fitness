// Create the required custom methods at the bottom of this file

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  type: {
    type: String,
    trim: true,
    required: "Exercise Type is Required"
  },

  name: {
    type: String,
    trim: true,
    required: "Exercise Name is Required"
  },

  duration: {
    type: Number,
    required:"Please enter exercise duration."
    },
  
  weight: {
      type: Number,
      required:    "Please enter exercise weight."
  },
  reps: {
      type: Number,
      required:    "Please enter number of reps."
  },
  sets: {
      type: Number,
      required:  "Please enter number of sets."
  }

});


// This creates our model from the above schema, using mongoose's model method
const Workout = mongoose.model("Workout", WorkoutSchema);

// Export the User model
module.exports = Workout;
