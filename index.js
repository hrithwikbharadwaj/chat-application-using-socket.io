const express= require('express');
const socket = require('socket.io');
// App Setup
const app= express();
const server = app.listen(4000,()=>{
    console.log('Listening to requrest on port 4000');
})

// Static Files

app.use(express.static('public'));

// Socket Setup

const io =socket(server);

io.on('connection',(socket)=>{
    console.log("made socket connection");
    // handle chat event
    socket.on('chat',(data)=>{
        io.sockets.emit('chat',data);
       
    });
    // handle typing event
    socket.on('typing',(userName)=>{
        socket.broadcast.emit('typing',userName);
    });


   
});

