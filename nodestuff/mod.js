var mymodule = require('./dir.js')
var stupidWhores = process.argv[2];
var stupidFatties = process.argv[3];
mymodule(stupidWhores,stupidFatties,function(err, list){
	if(err){
	throw err;
	}
	else list.forEach(function(file){
	console.log(file);
	})
	
});

