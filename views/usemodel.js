const mongoose=require('mongoose')
const userSchema=new mongoose.Schema({
    name:{
        type:string,
        required:[true,'hi..tell your name']
    },
    email:{
        type:string,
        required:[true,'tell your email'],
        unique:true,
        lowercase:true,
        validation:[validation.isEmail,'tell validation email']

    },
    photo:{
        
    }
})