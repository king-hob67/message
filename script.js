const messagesFile = 'messages.json';

// Load existing messages from file
fetch(messagesFile)
  .then(response => response.json())
  .then(data => {
    const messages = data.messages;
    messages.forEach(message => {
      const messageElement = document.createElement('p');
      messageElement.textContent = message;
      document.getElementById('messages').appendChild(messageElement);
    });
  });

// Save new message to file
document.getElementById('message-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const message = document.getElementById('message').value.trim();
  if (message) {
    const messages = JSON.parse(localStorage.getItem('messages')) || [];
    messages.push(message);
    localStorage.setItem('messages', JSON.stringify(messages));
    const messageElement = document.createElement('p');
    messageElement.textContent = message;
    document.getElementById('messages').appendChild(messageElement);
    document.getElementById('message').value = '';
  }
});
