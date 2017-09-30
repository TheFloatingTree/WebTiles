//Guide

var guide = new Guide();

function Guide() {
    this.colora = 40;
    this.colors = 40;
    this.colord = 40;
    this.colorf = 40;
    
    this.update = function() {
        
    }
    
    this.show = function() {
        textAlign(CENTER);
        fill(this.colora);
        text("a",(width/4) - (width/8),height-20);
        fill(this.colors);
        text("s",(width/4) * 2 - (width/8),height-20);
        fill(this.colord);
        text("d",(width/4) * 3 - (width/8),height-20);
        fill(this.colorf);
        text("f",(width/4) * 4 - (width/8),height-20);
    }
}