Status=""
img=""
function preload() {
img=loadImage("dog_cat.jpg")
}
function setup() {
    canvas=createCanvas(640,420)
    canvas.center()
    objectDetector=ml5.objectDetector("cocossd",model_loaded)
    document.getElementById("status").innerHTML="Status:Dectecing Objects"

}
function draw() {
    image(img,0,0,640,420)
    fill("#1c7016")
   text("Doge",170,80) 
    noFill()
    stroke("#106133")
    rect(170,60,200,350)

    fill("#1c7016")
    textSize(20)
    text("Cat",300,80)
    noFill()
    stroke("#106133")
    rect(300,60,300,350)
}
function model_loaded() {
    console.log("Model Loaded! <:D");
    Status=true
    objectDetector.detect(img,getResults)
}
function getResults(error,Results) {
    if (error) {
        console.log(error);
    }else{
        console.log(Results);
        
    }
}