const mongoose=require("mongoose")

const userShema=mongoose.Schema({
    role:{type:String,required:true},
    username:{type:String,require:true},
    email:String,
    password:String,
    phonenumber:String
})


module.exports =User =mongoose.model('user',userShema);