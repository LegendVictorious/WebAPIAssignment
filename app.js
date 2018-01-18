var express = require('express');

var app = express();

var port = 3000;

app.use(express.static('src'));

//Listen on the port 
app.listen(port, function(err){
	console.log("Server is running on port " + port);
});