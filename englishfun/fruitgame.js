
/*
Original Code: 24/08/2018
Works well. 
Bugs: 
1. No audio on mobile device (phone)
2. Fruits that are answers always on the same line. Left right or center
//jquery.js
var playing = false;
var a;
var i;
var score;
var trialsLeft;
var step;
var action; 
var chosenPosition = [];
var chosenAnswer = [];
var audioSource;
var placement;
var genRandom;
var audioIndex;
$(function(){$("#startreset").click(function(){
    if(playing == true){location.reload();
    }else{
        playing = true;
        score = 0; 
        $("#scorevalue").html(score);
        
        $("#trialsLeft").show();
        trialsLeft = 3;
        
        addHearts();
        
        $("#gameOver").hide();
        $("#startreset").html("Reset Game");
        startAction();
    }
});

//Problem: Answer always occurs in the same vertical line. One after another
$("#fruit0").mouseover(function(){
    score++;
    $("#scorevalue").html(score); 
    $("#slicesound")[0].play();
    clearInterval(action);
    
    $("#fruit0").hide("explode", 500);
    $("#fruit1").hide();
    $("#fruit2").hide();
    $("#fruit3").hide();
    //send new fruit
    setTimeout(startAction, 2000);
});
    
function addHearts(){
    $("#trialsLeft").empty();
    for(i = 0; i < trialsLeft; i++){
        $("#trialsLeft").append('<img src="images/heart.png" class="life">');
    }
}

function startAction(){
    
    //generate a fruit
    $("#fruit0").show();
	 $("#fruit1").show();
    $("#fruit2").show();
    chooseFruit();
    step = 5;action = setInterval(function(){     
        $("#fruit0").css('top', $("#fruit0").position().top + step); 
        $("#fruit1").css('top', $("#fruit1").position().top + step); 
        $("#fruit2").css('top', $("#fruit2").position().top + step);                              
    
        //check if the fruit is too low
        if($("#fruit1").position().top > $("#fruitsContainer").height()){
            //check if we have trials left
            if(trialsLeft > 1 ){
                //generate a fruit
                $("#fruit0").show();
                $("#fruit1").show();
                $("#fruit2").show();
                chooseFruit();
                step = 5;
               trialsLeft--;
                addHearts();
                
            }else{ // game over
                playing = false; //we are not playing anymore
                $("#startreset").html("Start Game"); // change button to Start Game
                $("#gameOver").show();
                $("#gameOver").html('<p>Game Over!</p><p>Your score is '+ score +'</p>');
                $("#trialsLeft").hide();
                stopAction();
            }
        }
    }, 30);
}

function chooseFruit(){
	chosenAnswer.length = 0;

	//Doesn't work here!!
	for(i = 0; i < 3; i++){
		genRandom = Math.round(7*Math.random());
		while($.inArray(genRandom,chosenAnswer) !== -1){
			genRandom = Math.round(7*Math.random());
		}
		chosenAnswer.push(genRandom);
	} 
	for(i = 0; i < chosenAnswer.length; i++){
		$("#fruit" + i).attr('src' , 'images/fruit' + chosenAnswer[i] + '.png');
	}
	playSound(chosenAnswer[0]);
	positionFruit();

}

function positionFruit(){//fruits still overlapping
	chosenPosition.length;
	for(i = 0; i < 3; i++){
		genRandom = 1 + Math.round(5* Math.random()) * 110;
		if($.inArray(genRandom,chosenPosition) !== -1){
			while($.inArray(genRandom,chosenPosition) !== -1){
				genRandom = 1 + Math.round(5* Math.random() * 110);
			}	
		}
		chosenPosition.push(genRandom);
	} 
	for(i = 0; i < chosenPosition.length; i++){
		$("#fruit"+ i).css({'left' : chosenPosition[i], 'top' : -50});
	}
}
function playSound(audioIndex) {
    	 var a = new Audio("audio/fruitsound" + audioIndex + ".mp3");
    a.play();
}
function stopAction(){
    clearInterval(action);
    $("#fruit1").hide();
    $("#fruit2").hide();
    $("#fruit3").hide();
}
});
*/


//addHearts() method doesn't work?????? 23/8/2018

//jquery.js
var playing = false;
var a;
var i;
var score;
var trialsLeft;
var step;
var action; 
var chosenPosition = [];
var chosenAnswer = [];
var audioSource;
var placement;
var genRandom;
var audioIndex;
var sortPics = [];
$(function(){$("#startreset").click(function(){
    if(playing == true){location.reload();
    }else{
        playing = true;
        score = 0; 
        $("#scorevalue").html(score);
        
        $("#trialsLeft").show();
        trialsLeft = 3;
        
        addHearts();
        
        $("#gameOver").hide();
        $("#startreset").html("Reset Game");
        startAction();
    }
});

//Problem: Answer always occurs in the same vertical line. One after another
$("#fruit0").mouseover(function(){
    score+=10;
    $("#scorevalue").html(score); 
    $("#slicesound")[0].play();
    clearInterval(action);
    
    $("#fruit0").hide("explode", 500);
    $("#fruit1").hide();
    $("#fruit2").hide();
    //send new fruit
    setTimeout(startAction, 2000);
});
    
function addHearts(){
    $("#trialsLeft").empty();
    for(i = 0; i < trialsLeft; i++){
        $("#trialsLeft").append('<img src="images/heart.png" class="life">');
    }
}

function startAction(){
    
    //generate a fruit
    $("#fruit0").show();
	 $("#fruit1").show();
    $("#fruit2").show();
    chooseFruit();
    step = 5;action = setInterval(function(){     
        $("#fruit0").css('top', $("#fruit0").position().top + step); 
        $("#fruit1").css('top', $("#fruit1").position().top + step); 
        $("#fruit2").css('top', $("#fruit2").position().top + step);                              
    
        //check if the fruit is too low
        if($("#fruit1").position().top > $("#fruitsContainer").height()){
            //check if we have trials left
            if(trialsLeft > 1 ){
                //generate a fruit
                $("#fruit0").show();
                $("#fruit1").show();
                $("#fruit2").show();
                chooseFruit();
                step = 5;
               trialsLeft--;
                addHearts();
                
            }else{ // game over
                playing = false; //we are not playing anymore
                $("#startreset").html("Start Game"); // change button to Start Game
                $("#gameOver").show();
                $("#gameOver").html('<p>Game Over!</p><p>Your score is '+ score +'</p>');
                $("#trialsLeft").hide();
                stopAction();
            }
        }
    }, 30);
}

function chooseFruit(){
	chosenAnswer.length = 0;

	//Doesn't work here!!
	for(i = 0; i < 3; i++){
		genRandom = Math.round(8*Math.random());
		while($.inArray(genRandom,chosenAnswer) !== -1){
			genRandom = Math.round(8*Math.random());
		}
		chosenAnswer.push(genRandom);
	} 
	for(i = 0; i < chosenAnswer.length; i++){
		$("#fruit" + i).attr('src' , 'images/fruit' + chosenAnswer[i] + '.png');
	}
	playSound(chosenAnswer[0]);
	positionFruit();

}

function positionFruit(){//fruits still overlapping
var storeResult = [];
	chosenPosition.length = 0;
	/*
	for(i = 0; i < 3; i++){
		genRandom = 1 + Math.round(5*Math.random()*110);
		if($.inArray(genRandom,chosenPosition) !== -1){
			while($.inArray(genRandom,chosenPosition) !== -1){
				genRandom = 1 + Math.round(5*Math.random()*110);
			}	
		}
		chosenPosition.push(genRandom);
	} 
	*/
	/*
	Didn't work. Images still overlapping
	genRandom = 103;
	chosenPosition.push(genRandom);
	genRandom = 286;
	chosenPosition.push(genRandom);
	genRandom = 469;
	*/
	
	for(i = 0; i < 3; i++){
		genRandom =  Math.round(5*Math.random());
		if($.inArray(genRandom,chosenPosition) !== -1){
			while($.inArray(genRandom,chosenPosition) !== -1){
				genRandom = Math.round(5*Math.random());
			}	
		}
		chosenPosition.push(genRandom);
	} 
	for(i = 0; i < chosenPosition.length; i++){
		$("#fruit"+ i).css({'left' : chosenPosition[i]*100, 'top' : -50});
	}

}
function playSound(audioIndex) {
    	 var a = new Audio("audio/fruitsound" + audioIndex + ".mp3");
    a.play();
}
function stopAction(){
    clearInterval(action);
    $("#fruit0").hide();
    $("#fruit1").hide();
    $("#fruit2").hide();
}
});