const createUser = require("../models/SignupSchema")
const validUser=require("../models/loginSchema")
const jwt=require("jsonwebtoken");


const registerUser=async(userData)=>{
    const user=await createUser(userData);
    return user;
}

const loginUser=async(userData)=>{
   
     const loguser = await validUser(userData);
     if(!loguser)
     {
         return null;
     }
     const payload ={
      email: loguser.emailid,
      id: loguser.id,
      role: loguser.role,  
    }

    const token=jwt.sign(payload,process.env.JWT_SECRET,{expiresIn:"1h"});

    return{
        token,
        id:loguser.id,
        role:loguser.role
        }
   
}

module.exports={registerUser,loginUser};