import jwt from "jsonwebtoken"
import config from "../config/default.js";

export const verifyToken = (req, res, next) =>{
 const token = req.header("Authorization");

 //verify that token exists
if(!token){
   //if doesnt exist returns a answer
  return res.status(401).json({
      success: false,
      msg: 'Authotization required'
   })
}

token = token.split(" ");

//Verify that the authorization is Bearer
if (token[0] !== "Bearer"){
   //Returns a authorization answer
   res.status(401).json({
      success: false,
      msg: 'Authorization required'
   })
}

jwt.verify(token[1], config.jwt_hash, (error, decode)=>{
if(error){
   return res.status(201).json({
      success: false,
      msg: 'Authorization required'
   })

}
   next();
})

 res.status(200).json({
    sucess: true,
    token : token,
    msn: 'This is a message'
 })
}