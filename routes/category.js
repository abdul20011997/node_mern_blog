const categoryController=require('../controllers/categoryController');

const express=require('express');

const router=express.Router();

router.post('/create',categoryController.category_create);
router.get('/fetchallcategories',categoryController.category_fetchall);
router.delete('/deletecategory/:id',categoryController.category_delete);
router.put('/updatecategory/:id',categoryController.category_update);





module.exports=router;