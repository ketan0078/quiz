// const mongoose =require( 'mongoose')


// const connect=async ()=>{
// try{
// const con=await mongoose.connect(process.env.MONGO_URI,{
// useUnifiedTopology:true,
// useNewUrlParser:true,
// useCreateIndex:true
// })
// console.log(`mongoose connected on port ${con.connection.host}`)
// }
// catch(e){
// console.log(e)

// }

// }
// module.exports=connect

import dotenv from "dotenv";
import mongoose from "mongoose"

dotenv.config();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log("mongo connected");
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};
export default connectDB;