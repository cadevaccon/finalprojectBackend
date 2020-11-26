const mongoose=require("mongoose")

const postShema=mongoose.Schema({
    username:{type:String,require:true},
    syptome:String,
    seriousilness:String,
    begindate:Date,
    checked:Boolean,
    looked:Boolean,
    doctor:String
})


module.exports =Post =mongoose.model('post',postShema);