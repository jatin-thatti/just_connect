const mongoose = require('mongoose');
const multer = require('multer');
const muler = require('multer');
const path= require('path');
const avatarPath=path.join('/uploads/users/avatars');

const userSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{

        type:String,
        required:true,
        unique:true
    }
    ,
    password:{

        type:String,
        required:true,
        
    },
    avatar:{
        type:String
    }


},{timestamps:true});

const storage = multer.diskStorage({

    destination:function(req,file,cb)
    {
        cb(null,path.join(__dirname,'..'+avatarPath));
    },
    filename:function(req,file,cb)
    {
        cb(null,file.fieldname+'-'+Date.now());
    }


})

userSchema.statics.upload = multer({storage:storage}).single('dp');
userSchema.statics.avatarPath = avatarPath;



const User=mongoose.model('User',userSchema);

module.exports=User;
