const express = require('express');

const controller = require('../controllers/users');

const router=express.Router();



router.get('/getusers',controller.getusers)

router.post('/addnewuser',controller.addNewUser)

router.delete('/deleteuser/:id',controller.deleteuser)

router.get('/editUser/:id', controller.editUser)
module.exports=router;