//Copywrite CodewithKevin 

//Selectors
const input = document.querySelector(".bot-input")
const button = document.querySelector(".chat-button")
const list = document.querySelector(".chatbox-list")
const displayrule = document.querySelector(".box-bundle");

//Event Listeners 
button.addEventListener("click", chatbot);


//Functions

function chatbot(event) {

    //Remove Rule 
    displayrule.remove();

    event.preventDefault();

    //Get API
    const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
    

    async function getword(){
    const response = await fetch(url + input.value);
    const data = await response.json();
    const {meanings} = data[0];
    const meaningofword = meanings[0].definitions[0].definition;
    
    
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
    newreply.innerHTML = meaningofword;
    newreply.classList.add("reply-item")
    chatdiv.appendChild(newreply);



    //Append List 
    list.appendChild(chatdiv)
    
    return;
}
    getword();
    
}

//Function to Change the Dark Mode
const chk = document.getElementById('chk');

chk.addEventListener('change', () => {
	document.body.classList.toggle('dark');
});

// SOCIAL PANEL JS
const floating_btn = document.querySelector('.floating-btn');
const close_btn = document.querySelector('.close-btn');
const social_panel_container = document.querySelector('.social-panel-container');

floating_btn.addEventListener('click', () => {
	social_panel_container.classList.toggle('visible')
});

close_btn.addEventListener('click', () => {
	social_panel_container.classList.remove('visible')
});