function setup(){
    createCanvas(windowWidth, windowHeight);
    background(200);
    
}

function draw(){
    line(0, height/2, width, height/2);
    strokeWeight(10);
    
    if(mouseY < height/2){
        fill(250, 10, 100);
        ellipse(mouseX, mouseY, 100, 100);
    }else{
        fill(80, 10, 250);
        ellipse(mouseX, mouseY, 100, 100);
    }
    
}