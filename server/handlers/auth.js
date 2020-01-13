const jwt=require('jsonwebtoken');
const db=require('../models');

exports.register=async (req,res,next)=>{
  
    try{
         const user=await db.User.create(req.body)
         const {id,username}=user;
         const token=jwt.sign({id,username}, new Buffer(process.env.SECRET,'base64'));
         res.status(201).json({id,username,token});
    }
    catch(err){
        if(err.code === 11000)
        {
           err.message='sorry ,that username is already taken';
        }
           next(err);
    }

}
exports.login=async (req,res,next)=>{
    try{
        // console.log("inside login");
        const user=await db.User.findOne({username:req.body.username});
        const {id,username}=user;
        const valid= user.comparePasswords(req.body.password);  
        if(valid) 
        {
            // console.log("inside valid login");
            const token=jwt.sign({id,username},new Buffer(process.env.SECRET,'base64'));
            res.json({
                id,username,token
            })
        }
        else{
            // console.log("inside invalid login");
            throw new Error();
        }

    }
    catch(err){
        err.message='Invalid Username/password';
           next(err);
    }

}