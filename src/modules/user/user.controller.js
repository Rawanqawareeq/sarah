import UserModel from "../../../DB/modle/user.model.js";

export const profile = async(req,res,next)=>{
  const user = await UserModel.findById(req.id);
   return res.json({massage:"success",user});
}