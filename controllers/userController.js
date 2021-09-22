const User=require('../models/auth');
const Post=require('../models/post');

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

const user_update=(req,res)=>{
    const id=req.params.id;
    const username=req.body.username;
    const password=req.body.password;
    User.findById(id)
    .then(user=>{
          bcrypt.hash(password,10).then(hash=>{
             user.username=username;
             user.password=hash;
              return user.save().then(data=>{
                res.status(200).json({
                    message:user
                })
             })
        })
        .catch(err=>{
            res.status(500).json({
                message:err
            })
        })
    }).catch(err=>{
        res.status(500).json({
            message:err
        })
    })

    
}
const user_delete=(req,res)=>{
    const id=req.params.id;
    User.findByIdAndRemove(id).then(data=>{
        Post.deleteMany({username:id}).then(data=>{
            res.status(200).json({
                message:"User deleted Successfully"
            })
        }).catch(err=>{
            res.status(500).json({
                message:err
            })
        })
    })
    .catch(err=>{
        res.status(500).json({
            message:err
        })
    })
}
module.exports={user_register,user_login,user_update,user_delete}