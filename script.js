const chatMessages = document.querySelector('.chat-messages');
const chatInput = document.querySelector('.chat-input input');
const sendButton = document.querySelector('.chat-input button');
const quickRepliesContainer = document.querySelector('.quick-replies');
const minimizeBtn = document.querySelector('.minimize-btn');

// Chat responses
const responses = {
    greeting: "Hello! Welcome to Alpha Electronic. How can I help you today?",
    services: "We offer the following services:\n- Electronic Solar System Installation\n- CCTV System Installation\n- House Wiring",
    contact: "You can reach us at:\nName: R.D S S Ranasingha\nAddress: Rantetikanda, Panagamuwa, Kurunegala\nPhone: 072-3283588",
    solar: "Our solar installation service includes:\n- Professional consultation\n- High-quality panels\n- Expert installation\n- Maintenance support",
    cctv: "Our CCTV services include:\n- Security camera installation\n- Smart monitoring setup\n- Remote access configuration\n- 24/7 recording solutions",
    wiring: "Our house wiring services include:\n- Complete electrical setup\n- Safety compliance\n- Modern wiring solutions\n- Maintenance support"
};

// Quick reply options
const quickReplies = [
    "Services",
    "Contact Info",
    "Solar Installation",
    "CCTV Systems",
    "House Wiring"
];

// Initialize chat
function initChat() {
    addMessage(responses.greeting, 'bot');
    updateQuickReplies();
}

// Add message to chat
function addMessage(text, sender) {
    const message = document.createElement('div');
    message.classList.add('message', `${sender}-message`);
    message.textContent = text;
    chatMessages.appendChild(message);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Update quick replies
function updateQuickReplies() {
    quickRepliesContainer.innerHTML = '';
    quickReplies.forEach(reply => {
        const button = document.createElement('button');
        button.classList.add('quick-reply');
        button.textContent = reply;
        button.onclick = () => handleUserInput(reply);
        quickRepliesContainer.appendChild(button);
    });
}

// Handle user input
function handleUserInput(text) {
    addMessage(text, 'user');
    
    let response;
    const lowerText = text.toLowerCase();
    
    if (lowerText.includes('services')) {
        response = responses.services;
    } else if (lowerText.includes('contact')) {
        response = responses.contact;
    } else if (lowerText.includes('solar')) {
        response = responses.solar;
    } else if (lowerText.includes('cctv')) {
        response = responses.cctv;
    } else if (lowerText.includes('wiring')) {
        response = responses.wiring;
    } else {
        response = "I'm not sure about that. Would you like to know about our services or contact information?";
    }
    
    setTimeout(() => addMessage(response, 'bot'), 500);
}

// Event listeners
sendButton.onclick = () => {
    if (chatInput.value.trim()) {
        handleUserInput(chatInput.value);
        chatInput.value = '';
    }
};

chatInput.onkeypress = (e) => {
    if (e.key === 'Enter' && chatInput.value.trim()) {
        handleUserInput(chatInput.value);
        chatInput.value = '';
    }
};

minimizeBtn.onclick = () => {
    const widget = document.querySelector('.chat-widget');
    const messages = document.querySelector('.chat-messages');
    const quickReplies = document.querySelector('.quick-replies');
    const input = document.querySelector('.chat-input');
    
    if (messages.style.display === 'none') {
        messages.style.display = 'block';
        quickReplies.style.display = 'flex';
        input.style.display = 'flex';
        minimizeBtn.textContent = '-';
    } else {
        messages.style.display = 'none';
        quickReplies.style.display = 'none';
        input.style.display = 'none';
        minimizeBtn.textContent = '?';
    }
};

// Initialize chat on load
initChat();
