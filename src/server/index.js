var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('chat message', function(msg){
    console.log('message: ' + JSON.stringify(msg));
    io.emit('chat message', msg);
  });
});

//Change to 3001 because our app is running on 3000 already. 
http.listen(3001, function(){
  console.log('listening on *:3001');
});