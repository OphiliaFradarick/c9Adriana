var box;

function setup(){
    createCanvas(600,400);

    box = createSprite(300,200,40,40);
    box.shapeColor= "lightgreen";

}

function draw(){

    background("black");
    drawSprites();
}