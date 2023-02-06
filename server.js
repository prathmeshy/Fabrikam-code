var express = require('express');
var path = require('path');
var app = express();


app.use(express.static(path.join(__dirname,'public')));

app.get('/', function (req, res){
    res.sendFile(path.join(__dirname + '/index.html'));

});


var server = app.listen(6776, function(){
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://localhost:6776", host, port)
});