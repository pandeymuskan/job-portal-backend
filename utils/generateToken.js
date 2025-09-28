import jwt from 'jsonwebtoken';


const generateToken=(userId)=>{
     const secret = process.env.JWT_SECRET;
   return jwt.sign({id:userId},secret,{
    expiresIn:'7d',
   });
};
export default generateToken;