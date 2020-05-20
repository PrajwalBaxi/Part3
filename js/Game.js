class Game {
  constructor(){
this.r = 50;
this.a = this.r;
this.b = height-this.r;
this.vy = 0;
this.gravity=0.5;
  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
    car1 = createSprite(100,300,10,10);
    car1.addImage("car1",car1_img);
    car2 = createSprite(100,350,10,10);
    car2.addImage("car2",car2_img);
    car3 = createSprite(100,400,10,10);
    car3.addImage("car3",car3_img);
    car4 = createSprite(100,450,10,10);
    car4.addImage("car4",car4_img);
    //scale(0.5);
    
    cars = [car1, car2, car3, car4];
  }

  play(){
    form.hide();
   
    Player.getPlayerInfo();
    
    if(allPlayers !== undefined){
      background(bIg);
      
     // image(track,0,-displayHeight*4,displayWidth,displayHeight*5);
      //var display_position = 100;
    /*  var hurdel1 = createSprite(300,300,10,10);
      hurdel1.addImage("hurdel1",hurdle);
      var hurdel2 = createSprite(500,300,10,10);
      hurdel2.addImage("hurdel1",hurdle);   */
      //index of the array
      var index = 0;

      //x and y position of the cars
      var x = 0;
      var y = 800;

      for(var plr in allPlayers){
        //add 1 to the index for every loop
        index = index + 1 ;

        //position the cars a little away from each other in x direction
        y = y + 50;
        //use data form the database to display the cars in y direction
        x = displayHeight + allPlayers[plr].distance;
        cars[index-1].x = x;
        cars[index-1].y = y;

        if (index === player.index){
          stroke(10);
          fill("red");
          rect(x-75,y,60,60);
          cars[index - 1].shapeColor = "red";
          camera.position.y = displayWidth/2;
          camera.position.x = cars[index-1].x
        }
       
        //textSize(15);
        //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }

    }

    if(keyIsDown(RIGHT_ARROW) && player.index !== null){
      player.distance +=10
      player.update();
     
    }
    if(keyIsDown(UP_ARROW)&& player.index !== null ){
      cars.y -=4
      player.update();
    }

    if(player.distance>1500){
      gameState=2;
      player.rank+=1;
      Player.updatecarend(player.rank);
    }
    
    var hurdel1 = createSprite(1500,1100,10,10);
    hurdel1.addImage("hurdel1",hurdle);
    var hurdel2 = createSprite(900,1100,10,10);
    hurdel2.addImage("hurdel2",hurdle); 
    var hurdel3 = createSprite(1300,1100,10,10);
    hurdel3.addImage("hurdel3",hurdle);
    var hurdel4 = createSprite(1500,1050,10,10);
    hurdel4.addImage("hurdel4",hurdle); 
    var hurdel5 = createSprite(900,1050,10,10);
    hurdel5.addImage("hurdel5",hurdle);
    var hurdel6 = createSprite(1300,1050,10,10);
    hurdel6.addImage("hurdel6",hurdle); 
    var hurdel7 = createSprite(1500,1000,10,10);
    hurdel7.addImage("hurdel7",hurdle);
    var hurdel8 = createSprite(900,1000,10,10);
    hurdel8.addImage("hurdel8",hurdle); 
    var hurdel9 = createSprite(1300,1000,10,10);
    hurdel9.addImage("hurdel9",hurdle);
    var hurdel10 = createSprite(1500,950,10,10);
    hurdel10.addImage("hurdel10",hurdle); 
    var hurdel11 = createSprite(900,950,10,10);
    hurdel11.addImage("hurdel11",hurdle);
    var hurdel12 = createSprite(1300,950,10,10);
    hurdel12.addImage("hurdel12",hurdle); 
    drawSprites();
    let score = 0;
     score = score + Math.round(getFrameRate()/60);
    var title = createElement('h3')
    title.html("Score ::  "+score);
    title.position(330, 0);
  }
  end(){
    console.log("Game ended");
    console.log(player.rank);
  }
}
