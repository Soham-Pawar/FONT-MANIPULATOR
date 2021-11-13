function setup(){
    video = createCapture(VIDEO);
    video.size(500,450);
    
    canvas = createCanvas(550,500);
    canvas.position(560,150);
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
    }
    
    difference = 0;
    leftWristX = 0;
    rightWristX = 0;
    
    function gotPoses(results){
    if(results.length > 0){
    console.log(results);
    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;
    difference = floor(leftWristX - rightWristX);
    console.log("LeftWristX = " + leftWristX + "RightWristX = " + rightWristX + "Difference = " + difference);
    }
    }

    function modelLoaded(){
    console.log("PoseNet Is Initialised");
    }
    
    function draw(){
    background('aqua');
    fill('#ffff00');
    textSize(difference);
    text('Soham' , 55 , 400);
    document.getElementById("square-sides").innerHTML = "Font size of the text is:- " + difference + " px";
    }