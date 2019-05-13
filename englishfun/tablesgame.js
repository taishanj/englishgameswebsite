var playing = false;
var score;
var action;
var timeremaining;
var correctAnswer;
var a = ['','one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine ','ten ','eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen '];
var b = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];
var audio = new Audio('/audio/correctSound.mp3');//once created here HTML elements not required

//if we click on the start/reset
document.getElementById("startreset").onclick = function(){
	//if we are playing
	if(playing == true){
		location.reload();//reload page
	}else{//if we are not playing
		//change mode to playing
		playing = true;
		//set score to 0
		score = 0;
		document.getElementById("scorevalue").innerHTML = score;
		
		//show countdown box
		show("timeremaining");
				timeremaining = 20;
				document.getElementById("timeremainingvalue").innerHTML = timeremaining;
		//change button to reset
		
		//hide game over box
		hide("gameOver");
		document.getElementById("startreset").innerHTML = "Reset Game";
		
		
		//start countdown
				startCountdown();
		//generate a new Q&A
				generateQA();
	}
}
 //if we click on answer box
 for(i = 1; i < 5; i++){
 	document.getElementById("box" + i).onclick = 
 	function(){
 		//check if we are playing
 		if(playing == true){//yes
 			if(this.innerHTML == correctAnswer){
 				
 				//increase score by 1;
 				audio.play();
 				score += 10;
 	document.getElementById("scorevalue").innerHTML = score;
 	
 					//hide wrong box and show correct box
 					hide("wrong");
 					show("correct");
 					setTimeout(function(){
 						hide("correct");
 						}, 1500);
 					
 					//Generate new Q&A
 					generateQA();
 			}else{
 				//wrong answer
 				hide("correct");
 				show("wrong");
 				setTimeout(function(){
 					hide("wrong");
 				},1000);
 			
 			}
 		}
 	}
 }
 
 	
 	//start counter			
 function startCountdown(){
 	action = setInterval(function(){
 		 	timeremaining -= 1;
 		 	document.getElementById("timeremainingvalue").innerHTML = timeremaining;
 		 	if(timeremaining == 0){//game over
 		 		stopCountdown();
 		 		show("gameOver");
 		 		document.getElementById("gameOver").innerHTML = 
 		 		"<p>Game Over!</p><p>Your score is " + score + " .</p>";
 		 				hide("timeremaining");
 		 				hide("correct");
 		 				hide("wrong");
 		 				playing = false;
 		 				document.getElementById("startreset").innerHTML = " Start Game";
 		 	}
 	}, 1000);
 }
 
 //stop counter
 function stopCountdown(){
 	clearInterval(action);
 }
 
 //hide an element
 function hide(Id){
 	document.getElementById(Id).style.display = "none";
 }
 
 //show an element
  function show(Id){
 	document.getElementById(Id).style.display = "block";
 }
 
 function generateQA(){
 	var x = 1 + Math.round(5*Math.random());
 	var y = 1 + Math.round(5*Math.random());
   correctAnswer = x*y;
   document.getElementById("question").innerHTML = a[x] + " x " + a[y] + " = ";//trying something here. numbers to words
   
   	var correctPosition = 1 + Math.round(3*Math.random());
   	document.getElementById("box" + correctPosition).innerHTML
   	= correctAnswer;//fill one box with correct answer 
   	
   	//fill other boxes with wrong answers
   	var answers = [correctAnswer];
   	for(i = 1; i<5; i++){
   		if(i != correctPosition){
   			var wrongAnswer;
   			do{
   				wrongAnswer = (1 + Math.round(9*Math.random()))*(1 + Math.round(9*Math.random()));
   			}while(answers.indexOf(wrongAnswer) >-1)
   			document.getElementById("box" + i).innerHTML = wrongAnswer;	
   				answers.push(wrongAnswer); 
   		}	
   		
   	}
   
 }
