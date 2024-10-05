document.getElementById('chatbot-send').addEventListener('click', function() {
    const input = document.getElementById('chatbot-input').value;
    if (input) {
        addMessage('You', input);
        getBotResponse(input);
        document.getElementById('chatbot-input').value = '';
    }
});

function addMessage(sender, message) {
    const messageContainer = document.createElement('div');
    messageContainer.className = 'message';
    messageContainer.innerHTML = `<strong>${sender}:</strong> ${message}`;
    document.getElementById('chatbot-messages').appendChild(messageContainer);
}

function getBotResponse(input) {
    let response = '';
    if (input.toLowerCase().includes('projects')) {
        response = 'I have worked on several projects including a Canteen Management System, a Student Management System, and Crime Trends in Tamil Nadu.';
    } else if (input.toLowerCase().includes('contact')) {
        response = 'You can contact me at rakeshmm499@gmail.com or +91 81229 97304.';
    } else {
        response = 'I am here to help you with information about my portfolio. Ask me about my projects, skills, or contact details!';
    }
    addMessage('Bot', response);
}
