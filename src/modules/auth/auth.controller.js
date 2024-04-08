import bcrypt from 'bcryptjs';
import UserModel from '../../../DB/modle/user.model.js';
import jwt from 'jsonwebtoken';
import sendEmail from '../../utils/sendEmailer.js';
import 'dotenv/config';
export const signup = async(req,res)=>{
    const {UserName,email,password} = req.body;
    const user = await UserModel.findOne({email});
    if(user){
        return res.status(409).json({massage:'email already exists'});
    }
   
    const token = await jwt.sign({email},process.env.CONFIRM_EMAIL);
    const html = `
    <h1>infinty light</h1>
    <h2>welcome  ${UserName}</h2>
    <a href='${req.protocol}://${req.headers.host}/auth/confirmEmail/${token}'>confrim email</a>
    <p>welcome massage</p>`;
    await sendEmail(email,'welcome massage',html);
    const hashpassword = await bcrypt.hash(password,parseInt(process.env.SALTROUND));
    const createuser = await UserModel.create({UserName,email,password:hashpassword});
    if(!createuser){
        return res.json({massage:'error while creating email'});
    }
    return res.status(201).json({massage:'success',user:createuser});
}
export const signin = async(req,res)=>{
    const {email,password} = req.body;
    const user = await UserModel.findOne({email});
    if(!user){
        return res.json({massage:'email not exists'});
    }
    if(!user.confirmEmail){
        console.log(user.confirmEmail)
        return res.json({massage:'Plz confirm Email'});
    }
    const match = await bcrypt.compare(password,user.password);
    if(!match){
        return res.json({massage:'invalid password'});
    }
    const token = jwt.sign({id:user.id},process.env.LOGIN,{expiresIn:60*60});
    return res.json({massage:'success',token});
}
export const confirmEmail = async(req,res)=>{
    const{token}= req.params;
    const decode =  jwt.verify(token,process.env.CONFIRM_EMAIL);
    const user = await UserModel.findOneAndUpdate({email: decode.email},{confirmEmail:true},{new:true});
    return res.json({massage:"success",user});
}