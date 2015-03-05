var net = require('net')
var server = net.createServer(function (socket) {
var port = process.argv[2];
socket.write(bullcrap() + '\n');
socket.end();
});
server.listen(process.argv[2]);

function bullcrap(){
	var today = new Date();
	return [today.getFullYear(), formatNumber(today.getMonth()+1), formatNumber(today.getDate())].join('-') + ' ' + [formatNumber(today.getHours()), formatNumber(today.getMinutes())].join(':');
}
function formatNumber(number){
	return number < 10 ? '0' + number : number;
}
