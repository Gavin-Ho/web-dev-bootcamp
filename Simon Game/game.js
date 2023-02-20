//  
$(document).on("keydown", function(){

    var i = 4;
    titleLevel(i);
    computerLevel(i);
    playerLevel(i);

});

function titleLevel(levelNumber){
    $("#level-title").text("Level " + levelNumber);
}


function computerLevel(level){

    var sequence = Array(level);

    for(var i = 0; i < level; i++){

        sequence[i] = Math.ceil(Math.random()*4);

        setTimeout(function(){
            console.log(sequence);
        }, 100);

        switch(sequence[i]){
            case 1:
                $("div.green").addClass("pressed");
                setTimeout(function(){
                    $("div.green").removeClass("pressed");
                }, 300);
                break;
            case 2:
                $("div.red").addClass("pressed");   
                setTimeout(function(){
                    $("div.red").removeClass("pressed");
                }, 300);
                break;
            case 3:
                $("div.yellow").addClass("pressed"); 
                setTimeout(function(){
                    $("div.yellow").removeClass("pressed");
                }, 300);               
                break;
            case 4:
                $("div.blue").addClass("pressed");    
                setTimeout(function(){
                    $("div.blue").removeClass("pressed");
                }, 300);            
                break;
            default:
                break;
        };

    }

    return sequence;

}

function playerLevel(level){

}