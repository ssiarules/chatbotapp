var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.send('<h1>Hello world</h1>');
});

io.on('connection', function(socket){
  console.log('a user connected');
});

//Change to 3001 because our app is running on 3000 already. 
http.listen(3001, function(){
  console.log('listening on *:3001');
});