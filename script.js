$(".theFuture").click(function(){
    var userInput1 = parseInt($(".oraora").val());
    var userInput2 = $(".zaWarudo").val().toLowerCase();
        if(userInput1 >= "10" && userInput2 === "yes"){
            $(".results").html("<a href ='https://www.youtube.com/watch?v=HaGkk60kcjQ' target='_blank'> <img src='https://i.kym-cdn.com/photos/images/newsfeed/000/754/539/566.gif'></a>");
        } else if (userInput1 < "10" && userInput2 === "yes"){
            $(".results").html("<a href='https://www.youtube.com/watch?v=VtzvlXL9gXk' target='_blank'><img src='https://thumbs.gfycat.com/DeficientSilentCero-max-1mb.gif'></a>");
        }else if (userInput1 >="10" && userInput2 === "no"){
            $(".results").html("<a href='https://www.youtube.com/watch?v=OzHE5q1NGa4' target='_blank'><img src='https://i.ytimg.com/vi/o5lj1Pgjruo/maxresdefault.jpg'></a>");
        }else if (userInput1 < "10" && userInput2 === "no"){
            $(".results").html("<a href='https://www.youtube.com/watch?v=CxXrHXcG8WI' target='_blank'><img src='https://rei.animecharactersdatabase.com/uploads/chars/5688-1505669513.jpg'></a>");
        }
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
            
    });