const {check,validationResult} =require("express-validator");

exports.profilepatientRules=()=>
[
    check('age','Age should be a Number').isNumeric(),
    check('sexe','Chosse a sexe Please').notEmpty(),
    check('weight',"Insert Weight Please").notEmpty(),
    check('weight',"Weight should be a Number").isNumeric(),

];

exports.validatorProfilepatient=(req,res,next)=>{
    const errors=validationResult(req) 
    errors.isEmpty()? next():res.status(400).json({errors:errors.array()})

};