document.title = "My website";
document.body.style.backgroundColor = "green";
document.body.style.color="red";
const username = "Happy Victory Day";
const welcomeMsg = document.getElementById("Welcome-msg");

welcomeMsg.textContent += username === "" ? 'Guest' : username;



