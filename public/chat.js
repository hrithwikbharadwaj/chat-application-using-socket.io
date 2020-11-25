// make connection
const socket= io.connect('http://localhost:4000/')

// Query DOM

let message= document.getElementById('message');
    handle= document.getElementById('handle'),
    button= document.getElementById('send'),
    output= document.getElementById('output');

// Emmit events 

button.addEventListener('click',()=>{
    socket.emit('chat',{
        message: message.value,
        handle: handle.value

    });
});

// listen for events

socket.on('chat', (data)=>{
    output.innerHTML += `<p> <strong> ${data.handle} : </strong> ${data.message}</p>`
})