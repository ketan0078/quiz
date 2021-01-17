// import  dotenv from 'dotenv'
// import Quizarray from './frontend/src/components/quizarray.js'
// import connect from'./config/db.js'
// import Quiz from './models/quizmodel.js'

// connect()
// dotenv.config()


// const importdata=async()=>{
// try{

//     await Quiz.deleteMany()
//     await Quiz.insertMany(Quizarray)
//     console.log('Data imported!')
// }
// catch(E){
//     console.log(E)
// }

// }

// importdata()

import dotenv from "dotenv";
import quizarray from './quizarray.js'
import Quiz from "./models/quizmodel.js";
import connectDB from "./config/db.js";

connectDB();
dotenv.config();

const importData = async () => {
  try {
    await Quiz.deleteMany();
    await Quiz.insertMany(quizarray);
    console.log("data imported!!!");
  } catch (e) {
    console.log(e.message);
  }
};

importData();