const User=require('../models/auth');
const bcrypt=require('bcrypt');
const user_register=(req,res)=>{
    const email=req.body.email;
    const password=req.body.password;
    User.find({email:email}).then(data=>{
        if(data.length==0){
            bcrypt.hash(password,10).then(hash=>{
                const user=new User({
                username:req.body.username,
                email:req.body.email,
                password:hash
                })
                return user.save().then(data=>{
                    res.status(200).json({
                        message:data
                    })
                })
            }).catch(err=>{
                res.status(500).json({
                    message:err
                })
            })
        }
        else{
            res.status(403).json({
                message:'User already exists'
            })
        }
    }).catch(err=>{
        res.status(500).json({
            message:err
        })
    })

}
const user_login=(req,res)=>{
    const email=req.body.email;
    const password=req.body.password;

    User.findOne({email:email}).then(userdata=>{
        if(userdata){
            bcrypt.compare(password,userdata.password).then(data=>{
                if(data){
                    res.status(200).json({
                        message:userdata
                    })
                }
                else{
                    res.status(401).json({
                        message:"Password does not match"
                    })
                }
            })
        }
        else{
            res.status(404).json({
                message:"User not found"
            })
        }
    })
    .catch(err=>{
        res.status(500).json({
            message:err
        })
    })
}
module.exports={user_register,user_login}