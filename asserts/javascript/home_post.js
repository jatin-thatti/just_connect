
{
   














    

    let createPost = function()
    {   
        let postform = $('#postForm');
        
        postform.submit(function(e){
            e.preventDefault();
            $.ajax({
                type:'post',
                url:'/post/create',
                data:postform.serialize(),
                success:function(data)
                {
                 
                    let unorderdlist = $('#list-items');
                    unorderdlist.prepend(displayPost(data.data.post));
                    deletPost(`a-${data.data.post._id}`);

                    new Noty({
                        theme:'relax',
                        text: data.flash,
                        type:'success',
                        layout:'topRight',
                        timeout:2000
                      
                    }).show();
                    

                },
                error:function(data)
                {
                    console.log(err)
                }
                
            });
        })


    }
createPost();


let displayPost = function(data){
    
   return(` 
        <div id='post-${data._id}'>
        <a id='a-${data._id}' href="/post/destroy/${data._id}"> x</a>
    
    <li>
        ${data.content} <sub>- ${data.user.name}</sub>
    </li>
    
    <h6>Comments</h6>

    <form action="/comment/addcomment/${data._id}" method="post">
        <textarea name="content" id="comment" cols="30" rows="2"></textarea>
        <button type="submit">Comment</button>
    </form>
    </div>
    `);

}


let deletPost = function(alink)
{   
    console.log(alink);
    var dlink=$(`#${alink}`);
   
    dlink.click((e)=>
    {
            
       e.preventDefault();
        $.ajax({

            url:dlink.attr('href'),
            type:'get',
            success:function(data)
            {   
                let postId=data.data.postId;
                
                let domPost=$(`#post-${postId}`);
                
                domPost.remove();
                new Noty({
                    theme:'relax',
                  text: data.flash,
                  type:'success',
                    layout:'topRight',
                    timeout:2000
                  
            }).show();
            },
            error:function(err){console.log(err);}
        })

    })

}
let delPost = function(alink)
{   
  
    var dlink=$(alink);
   
    dlink.click((e)=>
    {
            
       e.preventDefault();
        $.ajax({

            url:dlink.attr('href'),
            type:'get',
            success:function(data)
            {   
                let postId=data.data.postId;
                
                let domPost=$(`#post-${postId}`);
                
                domPost.remove();
                new Noty({
                    theme:'relax',
                  text: data.flash,
                  type:'success',
                    layout:'topRight',
                    timeout:2000
                  
            }).show();
            },
            error:function(err){console.log(err);}
        })

    })

}
var alinks = $('.del-link')

for(var alink of alinks)
{
    delPost(alink);
}

}