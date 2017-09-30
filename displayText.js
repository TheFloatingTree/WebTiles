display = new Display(score);

function Display(display) {
    
    this.x = width;
    this.y = height;
    this.display = display;
    
    this.update = function(display) {
        this.display = display;
    }
    
    this.show = function() {
        textSize(28);
        textAlign(LEFT);
        fill(200);
        text(this.display, 20, 40);
    }
}