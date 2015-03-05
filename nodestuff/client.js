var http = require('http');
var bl = require('bl');
var responses = [];
var finished = 0;
var http = require('http');
var bl = require('bl');
var urls = process.argv.slice(2),
output = [],
outputs = 0;
	urls.forEach(function(url, i){
	http.get(url, function(response){
	//response.setEncoding('utf8');
	response.pipe(bl(function (err,data){
	//response.setEncoding('utf8');
	output[i] = data.toString();
	outputs++;
	if(outputs === urls.length){
	output.forEach(function(result){
		console.log(result);
	});
	}
	}));
	});
	});
