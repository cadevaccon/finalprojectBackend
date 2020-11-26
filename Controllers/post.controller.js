
const config=require('config');

const Post=require('../model/Post')





exports.insertmypost=async(req,res)=>{
    const {username,syptome,seriousilness} =req.body
try {   
    const begindate=Date.now()
    const post=new Post({username,syptome,seriousilness,begindate})
        await post.save()
        return res.status(201).json(post)
} catch (error) {
    console.log(error)  
    res.status(500).json({errors:error})
}

}
exports.getmyposts=async(req,res)=>{
    const {username} =req.body
    try{
        const user=await Post.find({username})
        return res.status(201).json(user)
    }catch{error}
    {
        res.status(500).json({errors:error})
    }
}

exports.updatemypost=async (req,res)=>{
    const {_id,syptome,username,seriousilness,begindate,checked,looked,doctor} = req.body
    try {
        var updater={};
        doctor?updater={...updater,doctor}:updater=updater;
        syptome?updater={...updater,syptome}:updater=updater;
        seriousilness?updater={...updater,seriousilness}:updater=updater;
        begindate?updater={...updater,begindate}:updater=updater;
        checked?updater={...updater,checked}:updater=updater;
        looked?updater={...updater,syptome}:updater=updater;
        
        const updated=await Post.updateOne({_id},{$set:updater})
        const post=await Post.find({"username":username})
        return res.status(201).json(post)
    } catch (error) {
        res.status(500).json({errors:error})
    }
}