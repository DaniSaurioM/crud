const express = require('express');
const { route } = require('express/lib/application');
const router =express.Router();

const userController=require('../controllers/userController')

router.get('/',userController.list)
router.post('/add',userController.save)
router.get('/delete/:id',userController.delete)
router.get('/update/:id',userController.edit)
router.post('/update/:id',userController.update)
module.exports=router
