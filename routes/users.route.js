const express=require('express');
const router=express.Router();
const userControler=require('../controllers/user.controller');
router.get('/',userControler.get);
router.post('/',userControler.post);
module.exports=router
