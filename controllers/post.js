const Post  = require("../models/post")
const Comment = require('../models/comment')
exports.create = async function(req,res)
{   try{
        const post = await (await Post.create({content:req.body.content,user:req.user._id})).populate('user','name');
        post.populate('user');
        
        if(req.xhr)
        {
           
            return res.status(200).json({
                data:{
                    post:post
                },
                message:'Post created!',
                flash:'Post created !'
                
            });
        }
        
    }catch(err){
    req.flash('error','Error in creating the post');
}
  

    return res.redirect('back');
}



exports.destroy = async function(req,res){

    Post.findById({_id:req.params.id},(err,post)=>{
      
        if(post && post.user==req.user.id){
            
             Comment.deleteMany({post:post._id},(err)=>{});
            post.remove();
            if(req.xhr)
            {
                return res.status(200).json({
                    data:{
                        postId:req.params.id
                    },
                    message:'post deleted',
                    flash:'Post deleted!'
                });

            }

            return res.redirect('back');

        }else{res.redirect('back');}
    })

    

}