var frame = -1;

// DIV SUGAR TITLE
var scn = new DivSugar.Scene().setSize(400,250).setImage('#f9f9f9').appendTo(document.getElementById('header')),
	rotNode = new DivSugar.Node().setPosition(200,125,0).appendTo(scn),
	textNode = new DivSugar.Node().setSize(400,125).setPosition(-200,-75,0).appendTo(rotNode);

textNode.div.innerHTML = '<h1>jackharrhy</h1><h2>i make stuff</h2>';

var task = new DivSugar.Task().appendTo(DivSugar.rootTask);
task.onUpdate = function() { rotNode.rotate(0, this.deltaTime * 0.005, this.deltaTime * 0.0025); };

// CANVAS
var canvas = document.getElementById('canvas'),
	c = canvas.getContext('2d'),
	cursorX;

document.onmousemove = function(e) {
	cursorX = e.pageX;
}

canvas.height = 100;

function loop() {
	frame += 1;

	canvas.width = window.innerWidth;

	for(var i=0; i<=window.innerWidth; i++) {
		c.fillStyle = 'rgba('+
			String(Math.ceil(Math.sin(frame/5 + i/5)*55) + 200)+','+
			String(Math.ceil(Math.sin(frame/4 + i/4)*45) + 155)+','+
			String(155)+','+
			String(1)+')';

		if(i-50 < cursorX && i+50 > cursorX) {
			var grad = ((cursorX - i) - 50) * -1;

			if(grad > 50) {
				mod = (grad - 100) * -1;
			} else {
				mod = grad;
			}

			c.fillRect(
				i,
				50 +
					(Math.cos((frame+i)/60)*30)*
					Math.sin((frame-i)/30)-
					(Math.sin(frame+i))*mod/2,
				2,
				2);

		} else {
			c.fillRect(
				i,
				50 +
					(Math.cos((frame+i)/60)*30)*
					Math.sin((frame-i)/30)+
					Math.cos((frame+i))/10,
				2,
				2);
		}
	}

	requestAnimationFrame(loop);
}
loop();

// EASTER EGG
cheet('c o o l d u c k p i c s', function() {
	document.getElementById('wrap').style.display = 'none';
	document.getElementById('coolduckpics').style.display = 'block';
});

// SOCKET
var io = socket();
var socketConnection = false;

io.on('init', function() {
	socketConnection = true;
});
