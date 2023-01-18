const Post  = require("../models/post")

exports.create = function(req,res)
{
    Post.create({content:req.body.content,user:req.user._id},function(err,user)
    {
        if(err){console.log('error in creating the post');return;}
        console.log('post created');

    })

    return res.redirect('back');
}