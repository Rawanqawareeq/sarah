
import  { Schema, model } from 'mongoose';
const UserSchema = new Schema({
    UserName:{ 
        type: String,
        require:true,
       
    }, 
    email:{ 
        type :String,
        require:true,
    }, 
    password:{ type :String,
        require:true,
    }, 
    age: Number,
    gender:{
        type:String,
        enum:['Male','Female'],
    },
    confirmEmail:{
        type:Boolean,
        default:false,
    },
    profilePic:{
        type:String,
    }
  
  },{timestamp:true});

const UserModel = model('User',UserSchema);
export default UserModel;