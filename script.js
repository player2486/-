const socket = io();
const chatForm = document.getElementById('chat-form');
const messageInput = document.getElementById('message');
const usernameInput = document.getElementById('username');
const chatBox = document.getElementById('chat-box');

chatForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const message = messageInput.value;
  const username = usernameInput.value || "匿名";
  if (message.trim() !== "") {
    socket.emit('chat message', { username, message });
    messageInput.value = '';
  }
});

socket.on('chat message', (data) => {
  const msgElement = document.createElement('p');
  msgElement.textContent = `${data.username}: ${data.message}`;
  chatBox.appendChild(msgElement);
  chatBox.scrollTop = chatBox.scrollHeight;
});
