//Selectors
const input = document.querySelector(".bot-input")
const button = document.querySelector(".chat-button")
const list = document.querySelector(".chatbox-list")
const reply = document.querySelector(".computer-reply")

//Event Listeners 
button.addEventListener("click", chatbot);



//Function
function chatbot(event) {
    event.preventDefault();

    //Chat Div 
    const chatdiv = document.createElement("div");
    chatdiv.classList.add("chat");

    //Create Li 
    const newchat = document.createElement("li");
    newchat.innerHTML = input.value;
    newchat.classList.add("chat-item");
    chatdiv.appendChild(newchat);

    //Computer Reply
    const newreply = document.createElement("li");
    newreply.innerHTML = ("HEllo World");
    newreply.classList.add("chat-item")
    chatdiv.appendChild(newreply);

    //Append List 
    list.appendChild(chatdiv)
}

//Logic Functions 