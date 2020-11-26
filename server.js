const express=require("express")


const app=express()
const user=require('./Routes/user');
const profilepatient=require('./Routes/profilepatient')
const postpatient=require('./Routes/postpatient')

const PORT = process.env.PORT || 7000

app.listen(PORT ,(err)=>err? console.log(err):console.log(`Server is Running on ${PORT}`));

const connectdb=require(`./config/dbConnect`);


connectdb();

app.use(express.json())
app.use('/user',user)
app.use('/profilepatient',profilepatient)
app.use('/myposts',postpatient)