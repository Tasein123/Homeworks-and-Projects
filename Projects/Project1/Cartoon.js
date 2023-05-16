function draw() {
    var canvas = document.getElementById("Canvas");
    var context = canvas.getContext("2d");

    //Wall Color
    context.fillStyle = "rgb(110, 204, 255)";
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "rgb(102, 204, 255)";
    wallPaper(context, canvas.width, canvas.height);


    //Sky
    context.fillStyle = "rgb(20, 2, 50)";
    context.fillRect(canvas.width * 0.16, canvas.height * 0.1, canvas.width * 0.68, canvas.height * 0.6);
    drawCloudsAndBirds(context, canvas.width * 0.2, canvas.width * 0.5, canvas.height * 0.12, canvas.height * 0.55);
    context.fillStyle = "rgb(255, 255, 255, 0.2)";
    drawCircle(context, canvas.width * 0.6, canvas.height * 0.2, canvas.height * 0.1);
    context.fillStyle = "rgb(255, 255, 255)";
    drawCircle(context, canvas.width * 0.6, canvas.height * 0.2, canvas.height * 0.05);
    context.stroke();


    //top - button - left - right/ window frame
    drawRect(context, "rgb(102, 51, 0)", canvas.width * 0.13, canvas.height * 0.06, canvas.width * 0.74, canvas.height * 0.04);
    drawRect(context, "rgb(102, 51, 0)", canvas.width * 0.13, canvas.height * 0.7, canvas.width * 0.74, canvas.height * 0.04);
    drawRect(context, "rgb(102, 51, 0)", canvas.width * 0.13, canvas.height * 0.1, canvas.height * 0.04, canvas.height * 0.6);
    drawRect(context, "rgb(102, 51, 0)", canvas.width * 0.84, canvas.height * 0.1, canvas.height * 0.04, canvas.height * 0.6);


    //Glass on window  
    context.fillStyle = "rgb(204, 255, 255, 0.8)";
    drawWindowDoor(context, canvas.width * 0.84, canvas.height * 0.70, canvas.height * 0.10, canvas.width * 0.16, canvas.height * 0.10, canvas.height * 0.70);
}

//Draws Bird
function drawBird(ctx, x, y, r) {
    ctx.beginPath();
    ctx.lineWidth = r * 0.2;
    ctx.moveTo(x - r, y);
    ctx.arc(x, y, r, Math.PI, Math.PI * 2);
    ctx.arc(x + 2 * r, y, r, Math.PI, Math.PI * 2);
    ctx.stroke();
    ctx.strokeStyle= "white";
    ctx.closePath();
    ctx.lineWidth = 1;
}

//Draw clouds behind the window
function drawCloudsBehind(ctx) {
    for (var i = 0; i < 5; i++) {
        drawCloud(ctx,
            (Math.floor(Math.random() * 150) + 200),  // x = 190 ~ 215
            (Math.floor(Math.random() * 180) + 120),  // y = 160 ~ 360
            (Math.floor(Math.random() * 10) + 1));    // r = 1 ~ 10 

    }
}

//Draw Clouds in the sky
function drawCloudsAndBirds(ctx, x, xr, y, yr) {
    for (var i = 0; i < 15; i++) {
        drawCloud(ctx,
            (Math.floor(Math.random() * xr) + x),
            (Math.floor(Math.random() * yr) + y),
            (Math.floor(Math.random() * 10) + 1));    // r = 1 ~ 10 
        drawBird(ctx,
            (Math.floor(Math.random() * xr) + x),
            (Math.floor(Math.random() * yr) + y),
            (Math.floor(Math.random() * 10) + 1));    // r = 1 ~ 10  
    }
}

//Draw cloud
function drawCloud(ctx, x, y, r) {
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.arc(x, y, r, 0, Math.PI);
    ctx.arc(x - 2 * r, y, r, 0, Math.PI * 1.6);
    ctx.arc(x - r * 2 / 3, y - r * 2 / 3, r, Math.PI * 1.1, Math.PI * 1.65);
    ctx.arc(x + r * 2 / 3, y - r, r, Math.PI * 1.2, 0);
    ctx.arc(x + 2 * r, y, r, Math.PI * 1.4, Math.PI);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
}

//Draw shapes on wall
function wallPaper(ctx, w, h) {

    for (var x = 0; x <= w; x = x + 25) {
        for (var y = 12; y <= h + 25; y += 25) {
            wallPaperHelper(ctx, x, y);
        }
    }
}

//Draw shape 
function wallPaperHelper(ctx, x, y) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x - 12, y - 4);
    ctx.lineTo(x - 2, y - 9);
    ctx.lineTo(x, y - 10);
    ctx.lineTo(x + 8, y - 7);
    ctx.lineTo(x + 9, y - 6);
    ctx.lineTo(x, y);
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = "rgb(204, 204, 255, 0.7)";
    ctx.stroke();
    ctx.strokeStyle = "black";
}

//Draw rectangle with color
function drawRect(ctx, color, x, y, w, h) {
    ctx.fillStyle = color;
    ctx.strokeRect(x, y, w, h);
    ctx.fillRect(x, y, w, h);  
}

//Draw circle
function drawCircle(ctx, x, y, r) {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fill();
}

//Call the changeCanvasColor function after loading.
document.addEventListener('DOMContentLoaded', draw);
