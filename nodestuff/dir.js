var fs = require('fs');
module.exports = function(dir, ext, callback){
	var files = [];
	fs.readdir(dir, function(err, list){
	if(err){
	return callback(err);
	}
	else
	{
		for(i = 0; i < list.length-1; i++)
		{
			var n = list[i].indexOf('.' + ext);
			if(n != -1)
			{
				files.push(list[i]);
			}
		}
		return callback(null,files);
	}
});
};
