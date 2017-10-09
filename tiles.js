//Note Object

function Tile(row) {
    this.y = -(height/4);
    this.x = (width/4)*row;
    this.row = row;
    this.a = Math.round(Math.random());
    this.finished = false;
    this.c = false;
    this.reproduce = false;
    
    this.update = function() {
        this.y += speed;
        
        if (this.y > 0 && this.reproduce) {
            createRow();
            this.reproduce = false;
        }
    }
    
    this.show = function() {

        if (this.a === 0) {
            fill(255);
        }
        if (this.a === 1) {
            fill(25);
        }
        if (this.a === 2) {
            fill(255,0,0);
        }
        
        strokeWeight(2.5);
        rect(this.x,this.y,width/4,height/4);
    }
    
    this.collision = function() {
        if (this.y > height - (height/4) - 20) {
            this.c = true;
        }
        if (this.y > height && this.a === 1) {
            score -= 2;
        }
    }
    
    this.actCheck = function() {
        
        //A
        
        if (this.row === 0 && this.a === 1 && this.c && a && !this.finished) {
            this.finished = true;
            this.a = 0;
            score += 1;
            speed += .01;
        }
        if (this.row === 0 && this.a === 0 && this.c && a && !this.finished) {
            this.a = 2;
            score -= 2;
        }
        
        //S
        
        if (this.row === 1 && this.a === 1 && this.c && s && !this.finished) {
            this.finished = true;
            this.a = 0;
            score += 1;
            speed += .01;
        }
        if (this.row === 1 && this.a === 0 && this.c && s && !this.finished) {
            this.a = 2;
            score -= 2;
        }
        
        //D
        
        if (this.row === 2 && this.a === 1 && this.c && d && !this.finished) {
            this.finished = true;
            this.a = 0;
            score += 1;
            speed += .01;
        }
        if (this.row === 2 && this.a === 0 && this.c && d && !this.finished) {
            this.a = 2;
            score -= 2;
        }
        
        //F
        
        if (this.row === 3 && this.a === 1 && this.c && f && !this.finished) {
            this.finished = true;
            this.a = 0;
            score += 1;
            speed += .01;
        }
        if (this.row === 3 && this.a === 0 && this.c && f && !this.finished) {
            this.a = 2;
            score -= 2;
        }
    }
}

function createRow() {
    if (count > 16) {
        count = 0;
    }
    for (var i = 0; i < 4; i++) {
        tile[count] = new Tile(i);
        count++;
    }
    tile[count - 1].reproduce = true;
}