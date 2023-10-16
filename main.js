function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();

    model = ml5.objectDetector("cocossd", modelLoaded);
}

function modelLoaded() 
{
    console.log("Model is Loaded")
    model.detect(img, showResult);
    document.getElementById("status").innerHTML = "Started Detecting Objects";
}

objects = []

function showResult(error, result)
{
    if(error)
    {
        console.log(error)
    }
    else
    {
        console.log(result)
        objects = result
    }
}

function preload()
{
    img = loadImage("CR7.jpg"); 
}

function draw()
{
    image(img, 0, 0, 640, 420);
    for(i = 0; i<objects.length; i++)
    {
        document.getElementById("status").innerHTML = "Objects A"
        stroke("red");
        strokeWeight(2);
        noFill();
        rect(objects[i].x-250,objects[i].y-100,objects[i].width,objects[i].height);
        Name = objects[i].label;
        confidence = (objects[i].confidence * 100).toFixed(0); 
        strokeWeight(1);
        text(Name+ " " +confidence, objects[i].x-250, objects[i].y-100);

    }
}

