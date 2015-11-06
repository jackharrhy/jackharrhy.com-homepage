var io = socket();
var socketConnection = false;

io.on('init', function() {
	socketConnection = true;
}
