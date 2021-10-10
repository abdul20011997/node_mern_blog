const Post=require('../models/post');

const Post_create=(req,res)=>{
    const title=req.body.title;
    const desc=req.body.desc;
    const photo=req.file.filename;
    const username=req.body.username;
    console.log(req.file.filename);
    const post=new Post({
        title:title,
        desc:desc,
        photo:photo,
        username:username
    });
    post.save().then(data=>{
        res.status(200).json({
            message:data
        })
    }).catch(err=>{
        res.status(500).json({
            message:err
        })
    })

}
const Post_getallpost=(req,res)=>{
    Post.find().then(data=>{
        res.status(200).json({
            message:data
        })
    }).catch(err=>{
        res.status(500).json({
            message:err
        })
    })
}
const Post_update=(req,res)=>{
    const id=req.params.id;
    Post.findById(id).then(data=>{
        data.title=req.body.title;
        data.desc=req.body.desc;
        data.photo=req.body.photo;
        data.save().then(data=>{
            res.status(200).json({
                message:data
            })
        }).catch(err=>{
            res.status(500).json({
                message:err
            })
        })

        res.status()
    }).catch(err=>{
        res.status(500).json({
            message:err
        })
    })
}

const Post_getsinglepost=(req,res)=>{
    const id=req.params.id;
    Post.findById(id).populate('username','username').then(data=>{
        res.status(200).json({
            message:data
        })
    }).catch(err=>{
        res.status(500).json({
            message:err
        })
    })
}
const Post_delete=(req,res)=>{
    const id=req.params.id;
    Post.findByIdAndDelete(id).then(data=>{
        res.status(200).json({
            message:data
        })
    }).catch(err=>{
        res.status(500).json({
            message:err
        })
    })
}
module.exports={Post_create,Post_getallpost,Post_update,Post_getsinglepost,Post_delete};