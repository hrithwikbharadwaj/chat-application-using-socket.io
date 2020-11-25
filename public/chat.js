// make connection
const socket= io.connect('http://localhost:4000/')

// Query DOM

let message= document.getElementById('message');
    handle= document.getElementById('handle'),
    button= document.getElementById('send'),
    output= document.getElementById('output'),
    feedback= document.getElementById('feedback');

// Emmit events 

button.addEventListener('click',()=>{
    socket.emit('chat',{
        message: message.value,
        handle: handle.value

    });
});
message.addEventListener('keypress',()=>{
    socket.emit('typing',handle.value);
});

// listen for events

socket.on('chat', (data)=>{
    feedback.innerHTML =``;
    output.innerHTML += `<p> <strong> ${data.handle} : </strong> ${data.message}</p>`
});

socket.on('typing',(userName)=>{
    feedback.innerHTML =``;
    feedback.innerHTML +=`<p><em> <strong> ${userName}  </strong> is typing... </em></p>`
    
});

