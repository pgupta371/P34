var dog, database, foodS, foodStock, lastFed;
var food = 20;
function preload(){
  img1 = loadImage("Dog.png");
  img2 = loadImage("happydog.png");
}

function setup() {
  createCanvas(500, 500);
  dog = createSprite(245,270);
  dog.addImage(img1);
  dog.scale = 0.4

  database = firebase.database();
  foodStock = database.ref('Food');
  foodStock.on("value", readStock);
  
}


function draw() {  
  background(46, 139, 87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(img2);
  }

  fill(255);
  textSize(20);
  text("Press the up arrow key to feed the dog milk!", 50, 40);
  text("Milk Left: " + foodS, 180, 80);

  drawSprites();
  //add styles here

}

function readStock(data){
  foodS = data.val();
}
//Function to write values in DB function 
function writeStock(x){
   if(x<=0){
      x=0 
    }
    else{
       x=x-1
    } 
  database.ref('/').update({Food:x})
 }


