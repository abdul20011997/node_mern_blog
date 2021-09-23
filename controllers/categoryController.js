const Category=require('../models/category');


const category_create=(req,res)=>{
    const name=req.body.name;
    const data=new Category({
        name:name
    })
    data.save().then(data=>{
        res.status(200).json({
            message:'category created successfully'
        })
    })
    .catch(err=>{
        res.status(500).json({
            message:err
        })
    })
}

const category_fetchall=(req,res)=>{
    Category.find().then(data=>{
        res.status(200).json({
            message:data
        })
        })
        .catch(err=>{
            res.status(500).json({
                message:err
            })
        })
}

const category_delete=(req,res)=>{
    const id=req.params.id;
    Category.findByIdAndRemove(id).then(data=>{
        res.status(200).json({
            message:'Category deleted Successfully!!'
        })
    })
    .catch(err=>{
        res.status(500).json({
            message:err
        })
    })
}

const category_update=(req,res)=>{
    const id=req.params.id;
    const name=req.body.name;

    Category.findById(id).then(data=>{
        data.name=name;
        data.save().then(data=>{
            res.status(200).json({
                message:'Category Updated Successfully'
            })
        })

    }).catch(err=>{
        res.status(500).json({
            message:err
        })
    })
}


module.exports={category_create,category_fetchall,category_delete,category_update}