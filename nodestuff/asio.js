var fs = require('fs')
var midOut = undefined;
var lines = undefined;
var str = undefined;
function readStuff(){
	fs.readFile(process.argv[2], function doneReading(err, fileContents) {
	//console.log(process.argv[2]);
	midOut = fileContents.toString();
	//console.log(midOut);
	str = midOut.split('\n');
	//console.log(str);
	lines = str.length -1;
	console.log(lines);
	})
}
readStuff();
