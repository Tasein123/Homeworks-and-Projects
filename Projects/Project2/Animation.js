"use strict";

// images 
var img = new Image();
img.src = 'images/rolling.png';

var tableImgObj = new Image();
tableImgObj.src = 'images/wall.jpg';

var tvImgObj = new Image();
tvImgObj.src = 'images/window2.png';

var tvBubble = new Image();
tvBubble.src = 'images/6cr6xGXzi.png';


var canvas = document.getElementById('table');
var ctx = canvas.getContext('2d');

img.onload = function () {
	init();
};

// variables for image
const scale = 0.91;
const width = 500;
const height = 345;
const scaledWidth = scale * width;
const scaledHeight = scale * height;

// variables for rolling image
const cycleLoop = [0, 1, 2, 3];	// 4 in col and 2 in row for the spritesheet
var row = 0; 
let currentLoopIndex = 0;
let frameCount = 0;

// timer
var timer = -2;

// drawing for window 
function drawFrame(frameX, frameY) {
	ctx.drawImage(img,
		frameX * width, frameY * height, width, height,
		(canvas.width - tvImgObj.width) * 1.35, canvas.height * 0.08, scaledWidth, scaledHeight);
}

function step() {

	frameCount++;
	if (frameCount < 6) {
		window.requestAnimationFrame(step);
		return;
	}

	// draw wall
	ctx.drawImage(tableImgObj, 0, 0, canvas.width, canvas.height);

	// image rolling
	rolling();

	window.requestAnimationFrame(step);

	// talk bubbles
	callBubble();

	// draw window
	ctx.drawImage(tvImgObj, (canvas.width - tvImgObj.width), canvas.height * 0, tvImgObj.width * 0.8, tvImgObj.height * 0.68,);

}

// show bubble based on the value of timer
function callBubble() {
	ctx.font = "22px Arial";

    if (timer < 15) {
		ctx.drawImage(tvBubble, (canvas.width - tvImgObj.width) * 2.9, canvas.height * 0.1, tvBubble.width * 0.25, tvBubble.height * 0.15);
		ctx.fillText("AHHH", (canvas.width - tvImgObj.width) * 3, canvas.height * 0.16);
	}
	else if (timer < 40) {
		ctx.drawImage(tvBubble, -11, canvas.height * 0.6, tvBubble.width * 0.8, tvBubble.height * 0.35);
		ctx.fillText("OMG what is happening", canvas.width * 0.03, canvas.height * 0.72);
	}

	else if (timer < 100) {
		ctx.drawImage(tvBubble, (canvas.width - tvImgObj.width) * 2.9, canvas.height * 0.1, tvBubble.width * 0.24, tvBubble.height * 0.15);
		ctx.fillText("HELP", (canvas.width - tvImgObj.width) * 3, canvas.height * 0.16);
	}
	else if (timer < 120) {
		ctx.drawImage(tvBubble, -11, canvas.height * 0.6, tvBubble.width * 0.8, tvBubble.height * 0.35);
		ctx.fillText("    SORRY IDK HOW", canvas.width * 0.03, canvas.height * 0.72);

	}

	timer++;
}


// make image roll
function rolling() {
	frameCount = 0;
	drawFrame(cycleLoop[currentLoopIndex], row);
	currentLoopIndex++;
	// loop to make image roll properly
	if (currentLoopIndex >= cycleLoop.length) {
		currentLoopIndex = 0;
		if (row == 1) {
			row = 0;
		}
		else {
			row = 1;
		}
	}

}

function init() {
	window.requestAnimationFrame(step);
}