const passport = require('passport');
const Post = require('../models/post');
const User=require('../models/user')
const Comment = require('../models/comment');
const fs = require('fs');
const path = require('path')
exports.profile=async function(req,res)
{       
       
        if(req.isAuthenticated()){
            
           try{
                const posts = await Post.find({}).sort('-createdAt').populate('user')
                .populate({path:'comments',populate:{path:'user'}})

                const data = await User.find({});

                return res.render('profile',{userposts:posts,all_user:data});

           }catch(err){

                console.log('error in loading profile page ! ',err);

           }

            



            
       
        
        }
        else{
            return res.redirect('/user/signin');
        }
        

      

}
exports.signout=function(req,res)
{
    req.logout(function(err)
    {
        if(err){return;}
        req.flash('success','logged Out successfully');
        return res.redirect('/user/signin');
    });
//    return res.redirect('/user/signin');
}
exports.auth=function(req,res)
{   req.flash('success','Successfully Signedin');
    res.redirect('/user/profile');
}
exports.friends=function(req,res)
{
    res.end(req.user);
    // res.end('<h1>this is the user friends</h1>')
}
exports.posts=function(req,res)
{
    res.end('<h1>this is the user posts</h1>')
}
exports.signin=function(req,res)
{   
    if(req.isAuthenticated()){return res.redirect('/user/profile');}
   
    res.render('signin.ejs');
}
exports.signup=function(req,res)
{
    res.render('signup.ejs',{title:'sign up form'});
}
exports.create=function(req,res)
{
   User.create(req.body,function(err,newc){if(err){console.error('there is an error in creating the user');return;}console.log(`${newc} \n created`)})
   res.redirect('/user/signin');
}
exports.details = function(req,res)
{
    User.findById({_id:req.params.id},(err,data)=>{res.render('details',{userProfile:data});})
    

}

exports.update=async (req,res)=>
{
    try{
    const user = await User.findById({_id:req.params.id});
        
    User.upload(req,res,function(err)
    {
        if(err){req.flash('error','multer error!');return;}
        
        user.name=req.body.name;
        user.email=req.body.email;
        if(user.avatar)
        {   
            if(fs.existsSync(path.join(__dirname,'..',user.avatar)))
            {
                fs.unlinkSync(path.join(__dirname,'..',user.avatar));
            }
        }
        if(req.file)
        {
            user.avatar=User.avatarPath+'/' + req.file.filename; 
        }
        user.save();
        req.flash('success','Profile Updated!')
        
    })
        
        
       
        // res.redirect('/user/details/'+req.params.id);

    }catch(err)
        {
            req.flash('error','error in updating');
        }
    
     return res.redirect('back');
}