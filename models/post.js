const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const postSchema=new Schema({
    title:{
        type:String,
        reuired:true,
        unique:true
    },
    desc:{
        type:String,
        reuired:true,
    },
    photo:{
        type:String,
        reuired:true
    },
    username:{
        type:Schema.Types.ObjectId,
        required:true,
        ref:'User'
    },
    categories:{
        type:Array,
        required:false
    }
},{timestamps:true})
const Post=mongoose.model('Post',postSchema);
module.exports=Post;