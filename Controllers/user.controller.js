const User = require("../model/User")
const bcrypt=require("bcryptjs")
const jwt=require("jsonwebtoken")
const config=require('config')
const secret=config.get('secretOrKey');

exports.register=async (req,res)=>{
    const {username,password,email,role,phonenumber} =req.body

    try { {/*Searching for EXISTENSE */}
        const searchUsername=await User.findOne({username})
        if (searchUsername) return res.status(401).json("Username Already Exist");
        const searchEmail=await User.findOne({email})
        if (searchEmail) return res.status(401).json("Email Already Exist");
        {/*Creating NEW USER to insert into Client.Users */}
        const newUser=new User({
            username,password,email,role,phonenumber
        });
        {/* Crypting  */}
        const salt=await bcrypt.genSalt(10);
        const hash=await bcrypt.hash(password,salt)
        newUser.password=hash;

        await newUser.save()
        res.status(201).json(newUser)
    } catch (error) {
        console.log(error)
        res.status(500).json({errors:error})
    }




}

exports.login=async(req,res)=>{
    const {username,password} =req.body
try {   
    const user=await User.findOne({username})
        if(!user) return res.status(404).json("Wrong UserName");
        const ismatch=await bcrypt.compare(password,user.password)
        if (!ismatch)
       return res.status(401).json("Wrong PassWord")
        //creation du token
        const payload={
            id:user._id,
            username:user.username,
            email:user.email,
            role:user.role
        }
        const token=await jwt.sign(payload,secret)
        return res.status(200).json({token:`Bearer ${token}`})
} catch (error) {
    console.log(error)
    res.status(500).json({errors:error})
}

}