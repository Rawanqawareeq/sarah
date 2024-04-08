import jwt from 'jsonwebtoken';
import UserModel from '../../DB/modle/user.model.js';
const auth= async (req,res,next)=>{
 const{authorization} = req.headers;

 if(!authorization.startsWith(process.env.BEARERKEY)){
    return res.json({massage:"invalid authorization"});
 }
 const token = authorization.split(process.env.BEARERKEY)[1];
 const decode = await jwt.verify(token,process.env.LOGIN);
 const authID = await UserModel.findById(decode.id).select('UserName');
 req.id = authID;
  next();
}
export default auth;