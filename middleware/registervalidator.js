const {check,validationResult} =require("express-validator");

exports.registerRules=()=>
[
    check('username','this field USERNAME is Required').notEmpty(),
    check('email','this should be a EMAIL').isEmail(),
    check('email','this field EMAIL is Required').notEmpty(),
    check('password',"this field should be at least 4 char").isLength({min:4}),

];

exports.validator=(req,res,next)=>{
    const errors=validationResult(req) 
    errors.isEmpty()? next():res.status(400).json({errors:errors.array()})

};