const mongoose=require("mongoose");
const config=require("config")

const mongoUri=config.get('mongoURI');

const connectDB=async()=>{
    try {
            await mongoose.connect(mongoUri,{useUnifiedTopology:true,useNewUrlParser:true})
            console.log("Database Connected")
    } catch (error) {
        console.error(error)
    }

} 

module.exports=connectDB