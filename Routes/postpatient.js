const { Router } = require('express')
const express =require('express');

const { insertmypost,getmyposts, updatemypost } = require('../Controllers/post.controller');
const routerposts=express.Router()

routerposts.post('/savemypost',insertmypost);
routerposts.post("/getmyposts",getmyposts)
routerposts.post('/update',updatemypost)


module.exports=routerposts;