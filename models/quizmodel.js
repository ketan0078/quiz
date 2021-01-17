import mongoose from "mongoose";

const questionschema = mongoose.Schema({
  id: {
    type: Number,
  },
  question: {
    type: String,
    required: true,
  },
  option1: {
    type: String,
    required: true,
  },
  option2: {
    type: String,
    required: true,
  },
  option3: {
    type: String,
    required: true,
  },
  option4: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
  totalMarks: {
    type: Number,
    required: true,
  },
  marksObtained: {
    type: Number,
  },
});

const quizschema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },

  Owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  totalTime: {
    type: Number,
    required: true,
  },
  quizCode: {
    type: String,
    required: true,
  },
  totalMarks: {
    type: Number,
  },
  totalQuestions: {
    type: Number,
  },
  marksObtained: {
    type: Number,
  },
  questions: [questionschema],
  students: [
    {
      name: {
        type: String,
      },
      marksObtained: {
        type: String,
      },
    },
  ],
  student: {
    type: mongoose.Schema.Types.ObjectId,
    // required: true,
    ref: "User",
  },
});

const Quiz = mongoose.model("Quiz", quizschema);

export default Quiz;
