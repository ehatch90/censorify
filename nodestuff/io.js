var fs = require('fs');
var buf = fs.readFileSync(process.argv[2]);
var str = buf.toString();
var temp = str.split('\n');
var num = temp.length-1;
console.log(num);
