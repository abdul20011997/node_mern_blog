const express=require('express');
const postController=require('../controllers/postController');

const router=express.Router();

router.post('/createpost',postController.Post_create);
router.get('/getallpost',postController.Post_getallpost);
router.put('/getupdatepost/:id',postController.Post_update);
router.get('/getsinglepost/:id',postController.Post_getsinglepost);
router.delete('/deletepost/:id',postController.Post_delete)



module.exports=router;