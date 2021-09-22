const express=require('express');
const user=require('../controllers/userController');
const router=express.Router();

router.post('/register',user.user_register);
router.post('/login',user.user_login);
router.put('/update/:id',user.user_update);
router.delete('/delete/:id',user.user_delete);


module.exports=router;