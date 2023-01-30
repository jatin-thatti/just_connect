const Post = require('../../models/post');
module.exports.post = async function(req,res)
{
    try{const posts = await Post.find({}).populate('user','name').populate({path:'comments',populate:{path:'user'}})


    return res.json(200,{
        message:'post',
        post:posts
    })
}catch(err){
    console.log(err);
    return res.json(500,{message:'error'});
}
}

module.exports.destroy = async function(req,res)
{
    try{const post = await Post.findById({_id:req.params.id});
        if(!post || post.user!=req.user.id){
            
            
            return res.json(401,{message:'cant authriorize !'})
        }

        post.remove();
            post.save();
            return res.json(200,{message:'post deleted !'})


    }
    catch(err)
    {
        return res.json(500,{message:'error in deleting post'});

    }
}