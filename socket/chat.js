//make Connection
var socket = io.connect('http://localhost:4000');

//query DOM

var message = document.getElementById('message'),
    handle = document.getElementById('handle'),
    btn = document.getElementById('send'),
    output = document.getElementById('output'),
    feedback = document.getElementById('feedback'),
    //store input
    store = document.getElementById('store'),
    //to start shopping
    shop = document.getElementById('shop'),
    //where store goes
    storeDiv = document.getElementById('store-div');

//emit EVENTS

btn.addEventListener('click', function () {
    socket.emit('chat', {
        message: message.value,
        handle: handle.value
    });
});
//start shopping button
shop.addEventListener('click', function () {
    socket.emit('start-shop', {
        store: store.value,
        handle: handle.value
    });
});

message.addEventListener('keypress', function () {
    socket.emit('typing', handle.value)
});
store.addEventListener('chat', function () {
    socket.emit('chat', store.value)
});
//Listen for events

socket.on('start-shop', function (data) {
    output.innerHTML = ""
    storeDiv.innerHTML = '<h3>' + data.handle + ' is going to ' + data.store + '</h3>';
});

socket.on('chat', function (data) {
    feedback.innerHTML = ""
    output.innerHTML += '<p><strong>' + data.handle + ': </strong>' + data.message + '</p>'
});

socket.on('typing', function (data) {
    feedback.innerHTML = '<p><em>' + data + ' is typing a message...</em></p>';
});