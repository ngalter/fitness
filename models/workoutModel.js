// Create the required custom methods at the bottom of this file

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: Date.now
    },
    exercises: [
    {
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
      },
      reps: {
          type: Number,
      },
      sets: {
          type: Number,
      },
      distance: {
        type: Number
      }
    }
    ]
  },
  {
  toJSON: {
  // include any virtual properties when data is requested
  virtuals: true
  }
  }
  );

  workoutSchema.virtual("totalDuration").get(function() {
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
  });
  
  const Workout = mongoose.model("Workout", workoutSchema);
  
  module.exports = Workout;
