import MassageModel from "../../../DB/modle/Massage.model.js";
import UserModel from "../../../DB/modle/user.model.js";
export const getMassage = async(req,res)=>{
    const massageList = await MassageModel.find({receiverId:req.user._id}).select('content createdAt');
    return res.status(201).json({massage:"success",massageList});
}
export const sendMassage =async(req,res)=>{
    const{receiverId}= req.params;
    const{massage}= req.body;
    const user = await UserModel.findOne(receiverId);
    if(!user){
        return res.status(400).json({massage:"user not found"});
    }
    const createMassage = await MassageModel.create({content:massage},{receiverId});
    return res.status(201).json({massage:"success",createMassage });

}