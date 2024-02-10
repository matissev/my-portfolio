// add CDN for socket.io and link to this file in index.html header

// Variables
const serverURL = "https://io.matissev.com";  // make sure you EDIT THIS!
// const serverURL = "http://localhost:8100";  // make sure you EDIT THIS!
                                                               // use http://localhost:3000
                                                               // if running server locally
// Client Initialization
const socket = io(serverURL);

// RECEIVE

socket.on("connect", () => {            
    console.log("Connected to server!");
});

// SEND

var actions = document.querySelectorAll(".action");

console.log(actions);

for(i=0; i<actions.length; i++){
	actions[i].addEventListener('click', function() {
        console.log(this.value);
        socket.emit("message", this.value);
	})
}

// document.querySelectorAll(".action").onclick = (el) => {
//     console.log(el);
//     // let textBox = document.querySelector("#inputBox"); // select the input box
//     // socket.emit("message", textBox.value );            // send typed text
//     // textBox.value = "";                                // clear the input box
// };