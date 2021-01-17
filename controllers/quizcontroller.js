import asynchandler from "express-async-handler";

import Quiz from "../models/quizmodel.js";

import User from "../models/usermodel.js";

export const createQuiz = asynchandler(async (req, res) => {
  const {
    name,
    description,
    image,
    quizCode,
    totalMarks,
    totalQuestions,
    questions,
    totalTime,
  } = req.body;

  const quiz = new Quiz({
    Owner: req.student._id,
    name,
    description,
    image,
    quizCode,
    totalMarks,
    totalQuestions,
    questions,
    totalTime,
  });

  const createdquiz = await quiz.save();
  res.status(201).json(createdquiz);
});

export const getquizbyid = asynchandler(async (req, res) => {
  const quiz = await Quiz.findOne({ quizCode: req.params.id });

  if (quiz) {
    res.json(quiz);
  } else {
    throw new Error("Not Found");
  }
});

export const updatequiz = asynchandler(async (req, res) => {
  const { marksObtained } = req.body;
  const student = await User.findById({ _id: req.student._id });

  const quiz = await Quiz.findOne({ quizCode: req.params.id });

  quiz.name = req.body.name || quiz.name;
  quiz.description = req.body.description || quiz.description;
  quiz.image = req.body.image || quiz.image;
  quiz.quizCode = req.body.quizCode || quiz.quizCode;
  quiz.questions = req.body.questions || quiz.questions;
  quiz.totalMarks = req.body.totalMarks || quiz.totalMarks;
  quiz.marksObtained = req.body.marksObtained || quiz.marksObtained;
  quiz.totalQuestions = req.body.totalQuestions || quiz.totalQuestions;

  if (quiz) {
    const data = {
      name: student.name,
      marksObtained: marksObtained,
    };
    // quiz.marksObtained=marksObtained
    quiz.students = quiz.students.concat(data);
    quiz.student = req.student._id;
    quiz.students.sort((a, b) => b.marksObtained - a.marksObtained);
    const newquiz = await quiz.save();
    res.json(newquiz);
  } else {
    throw new Error("No Quiz matching");
  }
});
