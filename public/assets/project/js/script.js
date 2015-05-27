var name = prompt("Enter your name");
var socket = io();

// Variables
var $formChat = $('#form-chat'),
    $inputMessage = $('#input-message'),
    $messages = $('#messages');

$formChat.submit(function(e){
    e.preventDefault();

    socket.emit('chat message', name + ": " + $inputMessage.val());
    $inputMessage.val('');
});

socket.on('chat message', function(msg){
    $messages.append($('<li class="collection-item">').text(msg));
    $messages.scrollTo('.collection-item:last');
});
