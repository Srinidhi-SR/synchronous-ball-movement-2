class Form{
    constructor (){
        this.Input = createInput("name");
        this.Button = createButton("play");
    }
    display(){
    var title = createElement('h2');
    title.html ("car racing game");
    tiltle.position(130,0);
   this.Input.position(130,160);
    this.Button.position(250,200);
   this.Button.mousePressedover(()=>{
       this.Input.hide();
       this.Button.hide();
       player.name = this.Input.value();
       playerCount = playerCount + 1;
       player.index = playerCount;
       player.update();
       player.updateCount(playerCount);
       this.greeting.html("hello" + player.name)
       this.greeting.position(130,100);
   })

    }
}