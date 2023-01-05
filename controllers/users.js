const User=require('../models/user')
exports.profile=function(req,res)
{   
   const a=req.cookies.islogin;
   
   if(a=='false'){  return res.redirect('/user/signin');}
    const userid=req.cookies.user;
    
   User.findById(userid,function(err,man){
        console.log(man.email);
    if(err){console.log('errror');}
 
    res.render('profile.ejs',{email:man.email});

    

})

}
exports.user=function(req,res)
{
    res.render('user')
}
exports.friends=function(req,res)
{
    res.end('<h1>this is the user friends</h1>')
}
exports.posts=function(req,res)
{
    res.end('<h1>this is the user posts</h1>')
}
exports.signin=function(req,res)
{
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
exports.signout=function(req,res)
{
   res.cookie('user',undefined);
  res.cookie('islogin',false);
   res.redirect('/user/signin');
  
}
exports.auth=function(req,res)
{
      
       
        User.findOne({email:req.body.email},function(err,user)
        {
            if(err)return;
            if(!user){return;}
            else{
               
                if(user.password!=req.body.password){
                
                  return res.end("<h1>wrong password</h1>");
                
                }
                else{
                    res.cookie('user',user.id);
                    res.cookie('islogin',true);
                   
                    return res.redirect('/user/profile');
                }
            }
        })
    

      

}