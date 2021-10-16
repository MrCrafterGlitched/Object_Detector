Status = ""
img = ""
Objects = []

function preload() {
    img = loadImage("dog_cat.jpg")
}

function setup() {
    canvas = createCanvas(640, 420)
    canvas.center()
    objectDetector = ml5.objectDetector("cocossd", model_loaded)
    document.getElementById("status").innerHTML = "Status:Dectecing Objects"

}

function model_loaded() {
    console.log("Model Loaded! <:D");
    Status = true
    objectDetector.detect(img, getResults)
}

function getResults(error, Results) {
    if (error) {
        console.log(error);
    } else {
        console.log(Results);
        Objects = Results
    }
}

function draw() {
    image(img, 0, 0, 640, 420)
    if (Status != "") {
        for (i = 0; i < Objects.length; i++) {
            document.getElementById("status").innerHTML = "Status:Object Deteceted"
            fill("#1b8729")
            textSize(20)
            Percent = floor(Objects[i].confidence * 100)
            text(Objects[i].label + " " + Percent + "%", Objects[i].x + 15, Objects[i].y + 20)
            noFill()
            strokeWeight(2)
            rect(Objects[i].x, Objects[i].y, Objects[i].width, Objects[i].height)
        }
    }
}