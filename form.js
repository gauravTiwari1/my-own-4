class form{
    constructor(){
        this.input=createInput("name");
    
    this.button=createButton('offine');
    this.button2=createButton('online');
        
    }
    display(){
        this.title.html("the tommorow war");
        this.title.position(displayWidth/2 - 50,0);
        this.input.position(displayWidth/2 -40,displayHeight/2 -80);
        this.button.position(displayWidth/2 +10,displayHeight/2);
        this.button2.position(displayWidth/2 +50,displayHeight/2);
        this.button.mousePressed(()=>{
        });
        this.button2.mousePressed(()=>{
        });
    }
}