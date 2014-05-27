//draw the title
	omfg= document.getElementById("om");
	omfg.play();
	
	
//This function initializes coordinates of obstacles and the frog
function initialize(){
	//Fly coordinates, probability, and counter
	fly=0;
	pr_fly=0;
	fly_x=0;
	fly_y=0;
	
	// Home counter, Home[5] is the total counter
	
	home=[];
	home[0]=0;
	home[1]=0;
	home[2]=0;
	home[3]=0;
	home[4]=0;
	home[5]=0;	
	
	// Car coordinates
	
	x_log_cor=[];
	y_log_cor=[];
	x_car_cor=[];
	y_car_cor=[];
	x_car_cor[0]=0;
	y_car_cor[0]=310;
	x_car_cor[1]=90;
	y_car_cor[1]=310;
	x_car_cor[2]=180;
	y_car_cor[2]=310;
	x_car_cor[3]=270;
	y_car_cor[3]=310;
	x_car_cor[4]=360;
	y_car_cor[4]=310;
	
	highscore=0;
	
	x_car_cor[5]=20;
	y_car_cor[5]=350;	
	x_car_cor[6]=170;
	y_car_cor[6]=350;	
	x_car_cor[7]=220;
	y_car_cor[7]=350;
	x_car_cor[8]=320;
	y_car_cor[8]=350;		

	x_car_cor[9]=40;
	y_car_cor[9]=390;
	x_car_cor[10]=120;
	y_car_cor[10]=390;
	x_car_cor[11]=200;
	y_car_cor[11]=390;
	x_car_cor[12]=40;
	y_car_cor[12]=390;
	x_car_cor[13]=120;
	y_car_cor[13]=390;	
	
	x_car_cor[14]=60;
	y_car_cor[14]=430;
	x_car_cor[15]=160;
	y_car_cor[15]=430;
	x_car_cor[16]=260;
	y_car_cor[16]=430;
	x_car_cor[17]=360;
	y_car_cor[17]=430;	
		
	//Frog coordinates
	
	x_cor=185;
	y_cor=475;
	
	//car coordinates
	
	x_log_cor[0]=30;
	y_log_cor[0]=110;
	x_log_cor[1]=145;
	y_log_cor[1]=110;
	x_log_cor[2]=260;
	y_log_cor[2]=110;
	x_log_cor[3]=55;
	y_log_cor[3]=150;
	x_log_cor[4]=225;
	y_log_cor[4]=150;
	x_log_cor[5]=30;
	y_log_cor[5]=190;
	x_log_cor[6]=250;
	y_log_cor[6]=190;	
	x_log_cor[7]=40;
	y_log_cor[7]=230;
	number_lives=5;
	level_number=1;
	score=0;

}

//This function draws the title in the map
function drawtitle(x, y){
	title=document.getElementById("froggersprite");
	ctx.drawImage(title,0,0,399,109,x,y,399,109);
}

//This function draws the fly in the map
function drawfly(x,y){
	fly=document.getElementById("froggersprite");
	ctx.drawImage(fly,139,236,21,21,x,y,21,21);
}

//This function draws the first road in the map
function drawroad1 (x, y) {
	road1=document.getElementById("froggersprite");
	ctx.drawImage(road1,0,119,399,34,x,y,399,34);
}

//This function draws the second road in the map
function drawroad2(x,y){
	road2=document.getElementById("froggersprite");
	ctx.drawImage(road2,0,119,399,34,0,470,399,34);
}

//This function draws frogs that indicate lives
function froglive(x,y){
	frog1=document.getElementById("froggersprite");
	ctx.drawImage(frog1,13,335,18,23,x,y,18,23);
}

function level_score(level_number,score, number_lives, highscore, x,y){
	ctx.fillStyle = "#00FF00";
  	ctx.font = "20px Arial";
  	ctx.fillText("Level " + level_number, x, y);
  	ctx.fillText("Score : " + score, x+80 ,y);
}

//This function draws white car as obstacles
function drawwhitecar(x,y){
	whitecar=document.getElementById("froggersprite");
	ctx.drawImage(whitecar,46,265,29,25,x,y,29,25);
}
//This function draws white car_b as obstacles
function drawwhitecar_b(x,y){
	whitecar=document.getElementById("froggersprite");
	ctx.drawImage(whitecar,39,301,29,25,x,y,29,25);
}
//This function draws long car as obstacles
function drawlongcar(x,y){
	longcar=document.getElementById("froggersprite");
	ctx.drawImage(longcar,105,302,48,20,x,y,50,30);
}
//This function draws yellow car as obstacles
function drawyellowcar(x,y){
	yellowcar=document.getElementById("froggersprite");
	ctx.drawImage(yellowcar,82,265,26,26,x,y,30,30);
}
//This function draws a long log
function drawlonglog(x,y){
	longlog=document.getElementById("froggersprite");
	ctx.drawImage(longlog,5,164,180,22,x,y,180,35);
}
//This function draws a shorts log
function drawshortlog(x,y){
	shortlog=document.getElementById("froggersprite");
	ctx.drawImage(shortlog,5,230,86,22,x,y,86,35);
}
//This function draws a mid log
function drawmidlog(x,y){
	midlog=document.getElementById("froggersprite");
	ctx.drawImage(shortlog,5,198,120,22,x,y,120,35);
}
//This function draws an upward frog
function drawupfrog(x,y){
	upfrog=document.getElementById("froggersprite");
	ctx.drawImage(upfrog,12,369,23,17,x,y,25,20);
}


//This function animates the frog moves up
function frog_go_up(){
	x_cor=x_cor;
	score=score+10;
	y_cor=y_cor-40;

}
//This function animates the frog moves left
function frog_go_left(){
	x_cor=x_cor-21;
	y_cor=y_cor;
}
//This function animates the frog moves right
function frog_go_right(){
	x_cor=x_cor+21;
	y_cor=y_cor;
}
//This function animates the frog moves down
function frog_go_down(){
	x_cor=x_cor;
	y_cor=y_cor+40;
}
//This function animates the frog dies
function death(){
	alert("AW!!!!!!");
	number_lives--;
	
	x_cor=185;
	y_cor=475;
}
//This function starts the game by calling initialization and game loop
function start_game(){
	initialize();
	haha=0;
	basicboard();
	
	function basicboard(){
		c=document.getElementById("game");
		ctx=c.getContext("2d");
		ctx.fillStyle="#191970";
		ctx.fillRect(0,0,400,300);
		drawtitle(0,0);
		drawroad1(0,270);
		ctx.fillStyle="#000000";
		ctx.fillRect(0,304,400,300);
		drawroad2(0,470);

		//check gameover
		if(number_lives<=0){
			alert("Gameover!! Your score is: " +score);
			number_lives=5;
			for(i=0;i<5;i++){
				if(home[i]!=0){
					home[i]=0;
				}
			}
			score=0;
		}
		//draw frogs in home
		for(i=0;i<5;i++){
			if(home[i]!=0){
				drawupfrog(10+85*i,70);
			}
		}
		//check if all frogs are in home
		if(home[5]==5){
			home[5]=0;
			score+=1000;
			level_number++;
			for(i=0;i<5;i++){
				home[i]=0;
			}
			number_lives++;
		}
		//random position of fly
		if(fly==0){
			pr_fly=Math.random();
			if(pr_fly<=0.01){
				fly++;
				fly_x=Math.random()*400;
				fly_y=275;
			}
		}
		//draw live
  		for(i=0;i<number_lives;i++){
  			froglive(0+23*i,509);
  		}
  		
		level_score(level_number, score, number_lives, highscore, 0,555);
		//draw log
		for(i=0;i<8;i++){
			if(i>=0&&i<=2){
				drawshortlog(x_log_cor[i], y_log_cor[i]);			
			}
			else if(i>=3&&i<=4){
				drawmidlog(x_log_cor[i], y_log_cor[i]);
			}
			else if(i>=5&&i<=6){
				drawlonglog(x_log_cor[i], y_log_cor[i]);
			}
			else{
				drawlonglog(x_log_cor[i], y_log_cor[i]);	
			}
		}
		//draw car
		for(i=0;i<=18;i++){
			if(i>=0&&i<=4){
				drawyellowcar(x_car_cor[i], y_car_cor[i]);	
			}
			if(i>=5 && i<=8){
				drawlongcar(x_car_cor[i], y_car_cor[i]);
			}
			if(i>=9&&i<=13){
				drawwhitecar(x_car_cor[i],y_car_cor[i]);
			}
			if(i>=14&&i<=18){
				drawwhitecar_b(x_car_cor[i],y_car_cor[i]);
			}		
		}	
		//animate car
		for(i=0;i<=8;i++){
			if(x_car_cor[i]<-40){
				x_car_cor[i]=400;
			}
			else{
				if(i>=0&&i<=4){
					x_car_cor[i]-=1.5+(level_number-1)*0.15;
				}
				else if(i>=5&&i<=8){
					x_car_cor[i]-=1+(level_number-1)*0.15;
				}
			}
		}
		for(i=9;i<=18;i++){
			if(x_car_cor[i]>=400){
				x_car_cor[i]=-30;
			}
			else{
				if(i>=9&&i<=13){
					x_car_cor[i]+=1.1+(level_number-1)*0.15;
				}
				else if(i>=14&&i<=18){
					x_car_cor[i]+=1+(level_number-1)*0.15;
				}
			}
		}
		//draw working frog	
		drawupfrog(x_cor,y_cor);
		//draw fly
		if(fly!=0){
			drawfly(fly_x,fly_y);
		}
		//draw logs
		for(i=0;i<8;i++){
			if(x_log_cor[i]>400){
				x_log_cor[i]=-80;
			}
			else{
				if(i>=0&&i<=2){
					x_log_cor[i]+=1.7;			
				}
				else if(i>=3&&i<=4){
					x_log_cor[i]+=1.4+(level_number-1)*0.15;
				}
				else if(i>=5&&i<=6){
					x_log_cor[i]+=1.3;
				}
				else{
					x_log_cor[i]+=2.2+(level_number-1)*0.15;	
				}				
			}
		}
		checkcollide();
		
		//Thie function detects collision between frog and obstacles
		function checkcollide(){
			collog=false;
			colcar=false;
			//check collision with logs
			if(y_cor >= 110 && y_cor <= 250){
				if(y_cor==115){
					if(collide(x_cor,y_cor,25,20,x_log_cor[0],y_log_cor[0],86,40)||
					collide(x_cor,y_cor,25,20,x_log_cor[1],y_log_cor[1],86,40)||
					collide(x_cor,y_cor,25,20,x_log_cor[2],y_log_cor[2],86,40)){
											x_cor+=1.7;
											collog=true;
					}
				}
				else if(y_cor==155){
					if(collide(x_cor,y_cor,25,20,x_log_cor[3],y_log_cor[3],120,40)||
					collide(x_cor,y_cor,25,20,x_log_cor[4],y_log_cor[4],120,40)){
					x_cor+=1.4;

											collog=true;
					}
				}
				else if(y_cor==195){
					if(collide(x_cor,y_cor,25,20,x_log_cor[5],y_log_cor[5],180,40)||
					collide(x_cor,y_cor,25,20,x_log_cor[6],y_log_cor[6],180,40)){

											x_cor+=1.3;
											collog=true;
					}
				}	
				else if(y_cor==235){
					if(collide(x_cor,y_cor,25,20,x_log_cor[7],y_log_cor[7],180,40)){

											x_cor+=2.2;
											collog=true;
					}
				}	
				else{
					console.log("WTF");
				}
				if(!collog){
					death();
				}						
			}
			//check collision with cars
			else if(y_cor>=310 && y_cor<=450){
				if(y_cor==315){
					if((collide(x_cor,y_cor,25,20,x_car_cor[0],y_car_cor[0],26,26)||
					collide(x_cor,y_cor,25,20,x_car_cor[1],y_car_cor[1],26,26)||
					collide(x_cor,y_cor,25,20,x_car_cor[2],y_car_cor[2],26,26)||
					collide(x_cor,y_cor,25,20,x_car_cor[3],y_car_cor[3],26,26)||
					collide(x_cor,y_cor,25,20,x_car_cor[4],y_car_cor[4],26,26))){
										death();	
					}
				}
				if(y_cor==355){
					if((collide(x_cor,y_cor,25,20,x_car_cor[5],y_car_cor[5],50,26)||
					collide(x_cor,y_cor,25,20,x_car_cor[6],y_car_cor[6],50,26)||
					collide(x_cor,y_cor,25,20,x_car_cor[7],y_car_cor[7],50,26)||
					collide(x_cor,y_cor,25,20,x_car_cor[8],y_car_cor[8],50,26))){
									death();		
					}
				}
				if(y_cor==395){
					if((collide(x_cor,y_cor,25,20,x_car_cor[9],y_car_cor[9],26,26)||
					collide(x_cor,y_cor,25,20,x_car_cor[10],y_car_cor[10],26,26)||
					collide(x_cor,y_cor,25,20,x_car_cor[11],y_car_cor[11],26,26)||
					collide(x_cor,y_cor,25,20,x_car_cor[12],y_car_cor[12],26,26)||
					collide(x_cor,y_cor,25,20,x_car_cor[13],y_car_cor[13],26,26))){
										death();	
					}
				}		
				if(y_cor==435){
					if((collide(x_cor,y_cor,25,20,x_car_cor[14],y_car_cor[14],21,21)||
					collide(x_cor,y_cor,25,20,x_car_cor[15],y_car_cor[15],21,21)||
					collide(x_cor,y_cor,25,20,x_car_cor[16],y_car_cor[16],21,21)||
					collide(x_cor,y_cor,25,20,x_car_cor[17],y_car_cor[17],21,21))){
							death();			
					}
				}					
			}
			//check go home
			else if(y_cor<110){
				if(collide(x_cor,y_cor,25,20,10,70,30,30)){
					if(home[0]==0){
						score=score+50;
						x_cor=185;
						y_cor=475;
						home[0]++;
						home[5]++;							
					}
					else{
						death();
					}		
				}
				else if(collide(x_cor,y_cor,25,20,95,70,30,30)){
					if(home[1]==0){
						score=score+50;
						x_cor=185;
						y_cor=475;
						home[1]++;	
						home[5]++;													
					}
					else{
						death();
					}			
				}
				else if(collide(x_cor,y_cor,25,20,180,70,30,30)){
					if(home[2]==0){
						score=score+50;
						x_cor=185;
						y_cor=475;	
						home[2]++;	
						home[5]++;					
					}
					else{
						death();
					}			
				}
				else if(collide(x_cor,y_cor,25,20,265,70,30,30)){
					if(home[3]==0){
						score=score+50;
						x_cor=185;
						y_cor=475;
						home[3]++;	
						home[5]++;						
					}
					else{
						death();
					}
				}
				else if(collide(x_cor,y_cor,25,20,350,70,30,30)){
					if(home[4]==0){
						score=score+50;
						x_cor=185;
						y_cor=475;
						home[4]++;	
						home[5]++;						
					}
					else{
						death();
					}				
				}
				else{
					death();
				}
			}
			
		}
		//check eating fly
		if(collide(x_cor,y_cor,25,20,fly_x,fly_y,30,30)){
			fly=0;
			score+=200;
			fly_x=0;
			fly_y=0;		
		}
		
		function collide(x0,y0,w0,h0,x1,y1,w1,h1){
			return !(((y0+h0) < (y1)) ||
          		 (y0 > (y1+h1)) ||
         	 	 ((x0+w0) < x1)  ||
         		 (x0 > (x1 + w1))
          		); 
		}  
		
	}
	//This is the game loop
	game();	
		function game(){
			setInterval(basicboard,33);
			document.addEventListener("keydown", function(event) {
			if (event.keyCode == 37) {
			  frog_go_left();
			}
			if (event.keyCode == 38) {
			  frog_go_up();
			}
			if (event.keyCode == 39) {
			  frog_go_right();
			}
			if (event.keyCode == 40) {
     			frog_go_down();
			}
  			});		
  		}
  }




