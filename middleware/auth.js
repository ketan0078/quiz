import jwt from 'jsonwebtoken'
import User from '../models/usermodel.js'
import asynchandler from 'express-async-handler'
import dotenv from 'dotenv'
dotenv.config()


export const protect=asynchandler(async(req,res,next)=>{
let token 

if(req.headers.authorization&&req.headers.authorization.startsWith('Bearer'))

try{
    token=req.headers.authorization.split( ' ')[1]
    const decoded=jwt.verify(token,process.env.jwt_secret)
    req.student=await User.findById(decoded.id)
    console.log(req.student._id)
    next()
}catch(E){
    res.status(401).send()
    throw new Error('Not Authorised')
}

if(!token){
    throw new Error('Not Authorised')
}

})
