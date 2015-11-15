// CANVAS
var canvas = document.getElementById('canvas'),
	c = canvas.getContext('2d'),
	frame = -1,
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

// SOCKET
var io = socket();
var socketConnection = false;

io.on('init', function() {
	socketConnection = true;
});
