//Selectors
const input = document.querySelector(".bot-input")
const button = document.querySelector(".chat-button")
const list = document.querySelector(".chatbox-list")
const reply = document.querySelector(".computer-reply")
const displayrule = document.querySelector(".box-bundle");

//User Logic Response
const response_list = ['joke', 'next', 'lol']

const response_stop = ['stop', 'bye', 'goodbye', 'quit']

//Event Listeners 
button.addEventListener("click", chatbot);



//Function to display the joke

const start = "start"


function chatbot(event) {
        event.preventDefault();
    
        //Remove Rule 
        displayrule.remove();
    
        //Computer Logic 
        const baseURL = "https://v2.jokeapi.dev/joke/";
        const categories = ["Programming", "Misc", "Pun"];
        const params = [
            "blacklistFlags=nsfw,religious,racist",
            "idRange=0-100"
        ];
        const url = baseURL + categories[Math.floor(Math.random() * categories.length)] + "?" + params[Math.floor(Math.random() * params.length)];
        
    
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);
    
    
    
        xhr.onreadystatechange = function() {
            if(xhr.readyState == 4 && xhr.status < 300) // readyState 4 means request has finished + we only want to parse the joke if the request was successful (status code lower than 300)
            {
                var randomJoke = JSON.parse(xhr.responseText);
        
                if(randomJoke.type == "single")
                {
                    // If type == "single", the joke only has the "joke" property
    
                    //Computer Reply
                        const newreply = document.createElement("li");
                        newreply.innerHTML = randomJoke.joke;
                        newreply.classList.add("reply-item")
                        chatdiv.appendChild(newreply);
                     
                }
                else
                {
                    //Computer Reply
                    const newreply = document.createElement("li");
                    newreply.innerHTML = randomJoke.setup + "<br>" + randomJoke.delivery;
                    newreply.classList.add("reply-item")
                    chatdiv.appendChild(newreply);
                }
            }
            else if(xhr.readyState == 4)
            {
                alert("Error while requesting joke.\n\nStatus code: " + xhr.status + "\nServer response: " + xhr.responseText);
            }
        };
        
        xhr.send();
    
        //Chat Div 
        const chatdiv = document.createElement("div");
        chatdiv.classList.add("chat");
    
        //Create Li 
        const newchat = document.createElement("li");
        newchat.innerHTML = input.value;
        newchat.classList.add("chat-item");
        chatdiv.appendChild(newchat);
    
    
        //Append List 
        list.appendChild(chatdiv)
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
