import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

const generateauth=(id)=>{
return jwt.sign({id},process.env.jwt_secret,{
    expiresIn:'30d'
})

}

export default generateauth