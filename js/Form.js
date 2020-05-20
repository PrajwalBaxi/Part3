class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.reset = createButton('Reset');
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
  }

  display(){
    var title = createElement('h2')
    title.html("Hurdel Race");
    title.position(130, 0);
    

    this.input.position(130, 160);
    this.button.position(250, 200);

    this.reset.position(displayWidth-100,20);
    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("All The Best " + player.name+"  For The Race")
      this.greeting.position(30, 100);
    });
    this.reset.mousePressed(()=>{
      player.updateCount(0);
      game.update(0);
    });
  }
}