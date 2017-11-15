const scl = 20;

var tile = [];
var count = 0;
var a,s,d,f;

var score = 0;
var speed = 2;

function setup() {
    var width = windowWidth;
    var height = windowHeight;
    
    createCanvas(width,height);
    createRow();
}


function draw() {
    background(225);
    
    for (var i = 0; i < tile.length; i++) {
        tile[i].update();
        tile[i].show();
        tile[i].collision();
        tile[i].actCheck();
    }
    
    display.update(score);
    display.show();
    guide.show();
    
    
    //User Input
    
    if (keyIsDown(65)) {
        guide.colora = 100;
        a = true;
    } else {
        guide.colora = 40;
        a = false;
    }
    if (keyIsDown(83)) {
        guide.colors = 100;
        s = true;
    } else {
        guide.colors = 40;
        s = false;
    }
    if (keyIsDown(68)) {
        guide.colord = 100;
        d = true;
    } else {
        guide.colord = 40;
        d = false;
    }
    if (keyIsDown(70)) {
        guide.colorf = 100;
        f = true;
    } else {
        guide.colorf = 40;
        f = false;
    }
    
}
