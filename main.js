statuses = ""

function setup()
{
   canvas = createCanvas(380,380);
   canvas.center();
   video = captureCanvas(VIDEO);
   video.size(360,360);
   video.hide();
}

function start()
{
   objectDetector = ml5.objectDetector('cocossd', modelLoaded);
   document.getElementById("status").innerHTML = "Status : Detecting Objects";
   name_of_object = document.getElementById('inputBox');
   input_value = number_of_objects.value;
}

function modelLoaded()
{
    console.log("Model Loaded");
    statuses = true;
}

function draw()
{
    webcam.size(380,380);
}



