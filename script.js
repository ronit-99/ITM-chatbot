window.onload = () => {
    addMessage("bot", "👋 Hello! I'm the ITM Dehradun assistant. Click a question below to learn about the college.");
};

function addMessage(sender, text) {
    const chat = document.getElementById("chatbox");

    const message = document.createElement("div");
    message.className = `message ${sender}`;

    const span = document.createElement("span");
    span.innerText = text;

    message.appendChild(span);
    chat.appendChild(message);

    chat.scrollTop = chat.scrollHeight;
}

function ask(input) {
    addMessage("user", input);
    addMessage("bot", "Thinking...");

    const responses = {
        "hello": "Hello! Welcome to ITM Dehradun assistant.",
        "course": "ITM Dehradun offers programs like BCA, BBA, BCom and MBA.",
        "bca": "The BCA program focuses on programming, databases, networking and software development.",
        "admission": "Admissions are generally merit-based through the admission office.",
        "fee": "The approximate yearly fee for programs like BCA ranges around ₹40,000 to ₹60,000.",
        "location": "ITM Dehradun is located in Yamuna Colony, Dehradun, Uttarakhand.",
        "library": "The college provides a library with academic books and journals.",
        "placement": "The placement cell helps students connect with companies for job opportunities.",
        "faculty": "ITM Dehradun has experienced faculty members guiding students.",
        "hostel": "Hostel facilities are available for students coming from outside the city.",
        "campus": "The campus provides classrooms, computer labs, library and student facilities.",
        "contact": "You can contact the ITM Dehradun admission office for further details."
    };

    let reply = "Sorry, I couldn't understand that.";

    const lowerInput = input.toLowerCase();

    for (let key in responses) {
        if (lowerInput.includes(key)) {
            reply = responses[key];
            break;
        }
    }

    setTimeout(() => {
        const botMessages = document.querySelectorAll(".message.bot span");
        botMessages[botMessages.length - 1].innerText = reply;
    }, 600);
}

function clearChat() {
    document.getElementById("chatbox").innerHTML = "";
}
