
var express = require('express');
var app =  express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require('path');

// Initialize appication with route / (that means root of the application)
// app.get('/', function(req, res){
//  var express=require('express');
//  app.use(express.static(path.join(__dirname)));
//  res.sendFile(path.join(__dirname, '', 'index.html'));
// });

app.use(express.static('./'));

// Register events on socket connection
io.on('connection', function(socket){
 socket.on('chatMessage', function(from, msg){
   io.emit('chatMessage', from, msg);
 });
 socket.on('notifyUser', function(user){
   io.emit('notifyUser', user);
 });
});

// Listen application request on port 3000
http.listen(8124, function(){
 console.log('listening on *:3000');
});