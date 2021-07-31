var dog,sadDog,happyDog;
var button1, button2;
var foodObject;
var feed,addFood;
var fooodStock;

function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}

function setup() {
  createCanvas(1000,400);
  
  feed = createButton("Feed the dog");
  feed.position(700,95);
  feed.mousePressed(feedDog);

  addFood = createButton("Add Food");
  addFood.position(800,95);
  addFood.mousePressed(addFoods);

  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

}

function draw() {
  background(46,139,87);
  drawSprites();
}

//function to read food Stock


//function to update food stock and last fed time
function feedDog() {
dog.addImage(happydog);

if(foodObject.getFoodStock()<= 0) {
    foorObject.updateFoodStock(foodObject.getFoodStock()*0);
}else{
    foodObject.updateFoodStock(foodObject.getFoodStock()-1);
 }  
}

//function to add food in stock
function addFoods() {
foodS++;
database.ref('/').update({
  Food:foodS
})
}

