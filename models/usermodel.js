import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const userschema=mongoose.Schema({
email:{
    type:String
}
,
password:{
type:String
}
,
name:{
type:String
}
,

})

// userschema.virtual("quiz",{
//     ref:"Quiz",
//     localfield:"_id",
//     foreignfield:"student"
// })



    

userschema.methods.matchpassword=async function(password){

    return await bcrypt.compare(password,this.password)
}

userschema.pre("save", async function (next) {
    const user = this;
    if (user.isModified("password")) {
      user.password = await bcrypt.hash(user.password, 8);
    }
    console.log(user.password)
    next();
  });

// userschema.pre('save',async function(next){
//     if(!this.isModified("password")){
        
//     }
//     const salt=await bcrypt.genSalt(10)
//     this.password=await bcrypt.hash(this.password,salt)
// //    this.password=await bcrypt.hash(this.password,10)
// })


const User= mongoose.model('User',userschema)

export default User
