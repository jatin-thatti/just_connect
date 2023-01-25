const Post = require('../models/post');
const Comment = require('../models/comment');

exports.addcomment = async function(req,res)
{

    try{

        const post = await Post.findById({_id:req.params.post_id}).populate('user','name');
        const comment = await Comment.create({content:req.body.content,user:req.user._id,post:req.params.post_id})
        post.comments.push(comment);
        post.save();

        if(req.xhr)
        {
            return res.status(200).json({

                data:{
                    post:post,
                    content:req.body.content,
                    comment_id:comment._id
                },
                flash:'commented added'

            })
        }
        // req.flash('success','Comment Added');

    }catch(err){req.flash('error','Error in adding Comment');}
     
    res.redirect('back');
}
exports.destroy = async function(req,res)
{
try{
    const comment = await Comment.findById({_id:req.params.id})
    
       
       
    if(req.user.id==comment.user){
        const post = await Post.findById({_id:comment.post})
        post.comments.splice(post.comments.indexOf(comment._id),1);
        post.save();
        comment.remove();
        if(req.xhr)
        {
            return res.status(200).json({

                data:{comment_id:req.params.id},
                message:'comment deleted'


            });
        }

    }
    
}catch(err){req.flash('error','error in deleting the comment');}

    return res.redirect('back');
    
}