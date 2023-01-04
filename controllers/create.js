const User=require('../models/user');
module.exports=function(req,res)
{
    

    User.create(req.body,(err,newuser)=>{if(err){console.log('no bro there is an error');return;};console.log(`success ${newuser} !!!`)})
    
    res.redirect('/');

}