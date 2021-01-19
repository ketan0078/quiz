import User from "../models/usermodel.js";
import asynchandler from "express-async-handler";
import generateauth from "../utils/generateauth.js";
import Quiz from "../models/quizmodel.js";

export const loginuser = asynchandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (user && (await user.matchpassword(password))) {
    res.json({
      id: user._id,
      name: user.name,
      email: user.email,//do not disclose password to users
      isAdmin: user.isAdmin,
      token: generateauth(user._id),//not storing token in user. no neet to make a check
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

export const registeruser = asynchandler(async (req, res) => {
  const { email, password, name } = req.body;

  const user = await User.create({ email, password, name });
  if (user) {
    res.json({
      id: user._id,
      name: user.name,
      email: user.email,
      token: generateauth(user._id),//do not disclose passwords to user 
    });
  } else {
    res.status(400);
    throw new Error("invalid credentials");
  }
});

export const getmyquizes = asynchandler(async (req, res) => {
  const quiz = await Quiz.find({ student: req.student._id });
  if (quiz) {
    res.json(quiz);
  } else {
    throw new Error("You have not solved any quiz yet");
  }
});

export const logoutuser = asynchandler(async (req, res) => {
  const user = await User.findById({ _id: req.student._id });

  if (user) {
    await user.remove();
  } else {
    throw new Error("You are not yet logged in!");
  }
});

export const getuser = asynchandler(async (req, res) => {
  const user = await User.findById(req.student._id);
  if (user) {
    res.json({
      userID:user._id,
      name:user.name,
      email:user.email,
    });
  } else {
    throw new Error("user not found");
  }
});
