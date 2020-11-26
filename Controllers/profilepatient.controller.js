const config=require('config');
const Profile = require("../model/Profilepatient");
const User=require('../model/User')
exports.saveprofilepatient=async (req,res)=>{
    const {username,age,sexe,weight,seriousillness} =req.body

    try { {/*Searching for EXISTENSE */}
    //  need to search for the Account Existence
        const searchUserUsername=await User.findOne({username},{username:1})
         if (searchUserUsername) return res.status(401).json("Account Dosent Exist");
        const searchUsername=await Profile.findOne({searchUserUsername})
        if (searchUsername) return res.status(401).json("Username Already Exist");
        
        {/*Creating NEW Profile to insert into Client.Profiles */}
        const newProfile=new Profile({
            username,age,sexe,weight,seriousillness,
           
        });
        

        await newProfile.save()
        res.status(201).json(newProfile)
    } catch (error) {
        console.log(error)
        res.status(500).json({errors:error})
    }
}
exports.myprofile=async(req,res)=>{
    const {username} =req.body
try {   
    const user=await Profile.findOne({username})
    
        return res.status(201).json(user)
} catch (error) {
    console.log(error)
    res.status(500).json({errors:error})
}

}

exports.updatemyprofile=async(req,res)=>{
    const {username,age,weight,seriousillness,sexe} =req.body
try {   
    const updated=await Profile.updateOne({username},{$set:{sexe,weight,age}})
    const user=await Profile.findOne({username})
        return res.status(201).json(user)
} catch (error) {
    console.log(error)
    res.status(500).json({errors:error})
}

}


