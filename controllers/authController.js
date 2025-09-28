import User from "../models/User.js";
import generateToken from "../utils/generateToken.js";

export const register=async (req,res)=>{
    try{
   const {name,email,password,role}=req.body;
   const existingUser=await User.findOne({email});
   if(existingUser)
   {
    console.log("User already exists");
    return res.status(400).json({'message':'User already exists'});
   }
   const user=await User.create({name,email,password,role})
   res.status(201).json({
       id:user._id,
       name:user.name,
       email:user.email,
       role:user.role,
       token:generateToken(user._id),
   });
   console.log(user);
    }
    catch(error)
    {
        console.error(error);
        res.status(500).json({'message':'Server Error'});
    }
};

export const login=async (req,res)=>{
    try{
    const {email,password}=req.body;
    const user=await User.findOne({email});
    if(!user)
    {
        return res.status(400).json({'message':'Invalid Credentials'})
    }
    const isMatch=await user.matchPassword(password);
    if(!isMatch)
    {
        return res.status(400).json({'message':'Invalid Credentials'})
    }
    res.status(200).json({
         _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      token: generateToken(user._id),
    });
    console.log(user);
}
catch(error)
{
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
}
};