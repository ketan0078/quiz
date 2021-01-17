import mongoose from 'mongoose'

const questionschema=mongoose.Schema({
question:{
    type:String,
}
,
option1:{
type:String,
isCorrect:{
    type:Boolean
}

},
option2:{
    type:String,
    isCorrect:{
        type:Boolean
    }
    
    },
    option3:{
        type:String,
        isCorrect:{
            type:Boolean
        }
        
        },
        option4:{
            type:String,
            isCorrect:{
                type:Boolean
            }
            
            }
,
answer:{
type:String,
},
totalMarks:{
    type:Number
}
,
marksObtained:{
    type:Number
}
            
})

const Question=new mongoose.model('Question',questionschema)

export default Question