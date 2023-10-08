
import User from '../models/User.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

//user register
export const register = async(req,res)=>{

    try{
        //hashing passwords
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(req.body.password,salt)
        
        const newUser = new User({
            username:req.body.username,
            email:req.body.email,
            password:hash
        })

        await newUser.save();
        
        res.status(200).json({success:true,message:'Successfully registered!'})
    } catch (err){
        res.status(200).json({success:false,message:'Failed to create!'})
    }
}

//user login
export const login = async(req,res)=>{
    const email = req.body.email
    try{
        const user = await User.findOne({email})
        //if user dosen't exit
        if(!user){
            return res.status(404).json({success:false,message:'User not found!'})
        }

        //check password if user exists

        const checkCorrectPassword  = bcrypt.compare(req.body.password,user.password)
        
        //if wrong password

        if(!checkCorrectPassword){
            return res.status(401).json({success:false,message:'Wrong password!'})
        }

        const {password,role,...rest} = user._doc

    } catch (err){}
}