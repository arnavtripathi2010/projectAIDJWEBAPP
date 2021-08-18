peterpan = "";
Harrypotter = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristX = 0;
scoreRightWrist = 0;
scoreLeftWrist = 0;

function preload()
{
   song = loadSound("music.mp3");
   song = loadSound("music2.mp3");
}

function setup() {
    canvas =  createCanvas(600, 500);
    canvas.center()

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose' , gotPoses);
}
function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function draw(){
    image(video, 0, 0, 600, 500);

    fill("#FF0000");
    stroke("#FF0000");

    if(scoreRightWrist > 0.2)
{
    circle(rightWristX, rightWristY,20);

    if(rightWristY >0 && rightWristY <= 100)
    {
        document.getElementById("song1").innerHTML = "music.mp3";
        
    }

    if(scoreLefttWrist > 0.2)
{
    circle(leftWristX, leftWristY,20);

    if(leftWristY >0 && leftWristY <= 100)
    {
        document.getElementById("song1").innerHTML = "music2.mp3";
      
    }
}
}
function gotPoses(results)
{
    if(result.length > 0)
    {
        console.log(results);
        scoreRightWrist = result[0].pose.keypoints[10].score;
        scoreLeftWrist = result[0].pose.keypoints[9].score;
        console.log("scoreLeftWrist = " + scoreLeftWrist + "scoreLeftWrist = " + scoreLeftWrist);
        
        leftWristX = result[0].pose.leftWrist.x;
        leftWristY = result[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX +" leftWristY = "+ leftWristY);

        rightWristX = result[0].pose.rightWrist.x;
        rightWristX = result[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX +" rightWristY = "+ rightWristY);
    }
}
}