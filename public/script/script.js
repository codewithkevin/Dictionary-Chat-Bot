//Selectors
const input = document.querySelector(".bot-input")
const button = document.querySelector(".chat-button")
const list = document.querySelector(".chatbox-list")
const reply = document.querySelector(".computer-reply")

//Event Listeners 
button.addEventListener("click", chatbot);



//Logic Functions
// function displayJoke(){    
    
//     const baseURL = "https://v2.jokeapi.dev/joke/";
//     const categories = ["Programming", "Misc", "Pun"];
//     const params = [
//         "blacklistFlags=nsfw,religious,racist",
//         "idRange=0-100"
//     ];
//     const url = baseURL + categories[Math.floor(Math.random() * categories.length)] + "?" + params[Math.floor(Math.random() * params.length)];
    

//     var xhr = new XMLHttpRequest();
//     xhr.open("GET", url, true);



//     xhr.onreadystatechange = function() {
//         if(xhr.readyState == 4 && xhr.status < 300) // readyState 4 means request has finished + we only want to parse the joke if the request was successful (status code lower than 300)
//         {
//             var randomJoke = JSON.parse(xhr.responseText);
    
//             if(randomJoke.type == "single")
//             {
//                 // If type == "single", the joke only has the "joke" property
//                 par.innerHTML = randomJoke.joke;
//             }
//             else
//             {
//                 // If type == "single", the joke only has the "joke" property
//                 par.innerHTML = randomJoke.setup + "<br>" + randomJoke.delivery;
//                 // par.innerHTML += randomJoke.delivery;
//             }
//         }
//         else if(xhr.readyState == 4)
//         {
//             alert("Error while requesting joke.\n\nStatus code: " + xhr.status + "\nServer response: " + xhr.responseText);
//         }
//     };
    
//     xhr.send();
// } 


//Function
function chatbot(event) {
    event.preventDefault();

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
                    newreply.classList.add("chat-item")
                    chatdiv.appendChild(newreply);
                 
            }
            else
            {
                // If type == "single", the joke only has the "joke" property
                //  randomJoke.setup + "<br>" + randomJoke.delivery;
                // par.innerHTML += randomJoke.delivery;
                //Computer Reply
                const newreply = document.createElement("li");
                newreply.innerHTML = randomJoke.setup + "<br>" + randomJoke.delivery;
                newreply.classList.add("chat-item")
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

