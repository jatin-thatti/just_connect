

{
    function delcom1(i)
    {
        console.log(i)
        var form = $(`#comment-a-${i}`);
    
      
        form.click(function(e){
            e.preventDefault();
            
            $.ajax({
    
                type:'get',
                url:form.attr('href'),
                
              
                success:function(data){
                
                   var x=$(`#commentId-${data.data.comment_id}`);
                   console.log(data);
                   x.remove();
                    
                    new Noty({
                        theme:'relax',
                        text:'comment deleted',
                        type:'success',
                        layout:'topRight',
                        timeout:2000
                      
                    }).show();
                },
                error:function(){}
    
            })
        })
    }
function delcom(i)
{
    var form = $(i);

  
    form.click(function(e){
        e.preventDefault();
        
        $.ajax({

            type:'get',
            url:form.attr('href'),
            
          
            success:function(data){
            
               var x=$(`#commentId-${data.data.comment_id}`);
               console.log(data);
               x.remove();
                
                new Noty({
                    theme:'relax',
                    text:'comment deleted',
                    type:'success',
                    layout:'topRight',
                    timeout:2000
                  
                }).show();
            },
            error:function(){}

        })
    })
}

    function domComment(i)
    {
        var form = $(i);
       
        form.submit(function(e){
            e.preventDefault();
            
            $.ajax({

                url:form.attr('action'),
                type:'post',
                data:form.serialize(),
                success:function(data){
                  
                    var list = $(`#comment-${data.data.post._id}`);
                    let displayPostData=displayPost(data.data)
                    list.prepend(displayPostData);
                   
                    delcom1(data.data.comment_id);
                    
                    new Noty({
                        theme:'relax',
                        text:'comment added',
                        type:'success',
                        layout:'topRight',
                        timeout:2000
                      
                    }).show();
                },
                error:function(){}

            })
        })
    }
    var commentForms = $('.comment-form');
    
    for(var i of commentForms )
    {
        domComment(i);
    }

    var displayPost=function(data)
    {
        return `<li id="commentId-${data.comment_id}">
        ${data.content} <sub>- ${data.post.user.name}</sub>
        
       
            <a href="/comment/destroy/${data.comment_id}" class="delComment" id="comment-a-${data.comment_id}">X</a>
        
    </li>`
    }

// _____________________________________________________________________________________________
    


    
    var commentDelLinks = $('.delComment');
    for(var i of commentDelLinks )
    {
        delcom(i);
    }



    


}