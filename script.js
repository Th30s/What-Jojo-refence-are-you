$(".theFuture").click(function(){
    var userInput1 = parseInt($(".oraora").val());
    var userInput2 = $(".zaWarudo").val().toLowerCase();
        if(userInput1 >= "10" && userInput2 === "yes"){
            $(".results").html("<img src='https://i.kym-cdn.com/photos/images/newsfeed/000/754/539/566.gif'>");
        } else if (userInput1 < "10" && userInput2 === "yes"){
            $(".results").html("<img src='https://thumbs.gfycat.com/DeficientSilentCero-max-1mb.gif'>");
        }else if (userInput1 >="10" && userInput2 === "no"){
            $(".results").html("<img src='https://i.ytimg.com/vi/o5lj1Pgjruo/maxresdefault.jpg'>");
        }else if (userInput1 < "10" && userInput2 === "no"){
            $(".results").html("<img src='https://rei.animecharactersdatabase.com/uploads/chars/5688-1505669513.jpg'>");
        }
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
            
    });