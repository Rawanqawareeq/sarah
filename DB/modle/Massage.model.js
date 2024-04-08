import { Schema, Types, model } from "mongoose";

const MassageSchema = new Schema({
    content:{
        type:String,
        require:true,
    },
    receiverId:{
        type:Types.ObjectId,
        require:true,
        },
    

},{timestamps:true});
const MassageModel = model('Massage',MassageSchema);
export default MassageModel;