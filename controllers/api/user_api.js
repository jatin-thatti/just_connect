const User = require('../../models/user')
const jwt = require('jsonwebtoken');
module.exports.createSession = async function(req,res)
{
   try{ const user = await User.findOne({email:req.body.email});


   if(!user || user.password!=req.body.password)
   {    
        return res.json(422,{
            message:'Invalid credentials'
        })
        

   }

   return res.json(200,{
     message:'success'       ,
     data:{
        token:jwt.sign(user.toJSON(),'jatin',{expiresIn:100000}),
        
     }
   })

}catch(err)
{
    return res.json(200,{
        message:'there is an error!'
    })
}
}