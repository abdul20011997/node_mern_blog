const express=require('express');
const userRoutes=require('./routes/user');
const postRoutes=require('./routes/post');

const app=express();
const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://Abdul:kM8PSZsQaD4t5oFY@cluster0.50gcj.mongodb.net/node_blog_mern?retryWrites=true&w=majority').then(()=>{
app.listen(4000);
console.log('connected');
}).catch(err=>{
    console.log(err)
})
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(userRoutes)
app.use('/post',postRoutes)
