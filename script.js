const chatBox = document.getElementById("chat-box");
const chatForm = document.getElementById("chat-form");
const usernameInput = document.getElementById("username");
const messageInput = document.getElementById("message");

chatForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const username = usernameInput.value.trim();
  const message = messageInput.value.trim();

  if (!username || !message) return;

  const time = new Date().toLocaleTimeString();

  const newMessage = document.createElement("p");
  newMessage.innerHTML = `<strong>${username}</strong> <span style="color:#aaa;">[${time}]</span>: ${message}`;
  chatBox.appendChild(newMessage);
  chatBox.scrollTop = chatBox.scrollHeight;

  messageInput.value = "";
});
