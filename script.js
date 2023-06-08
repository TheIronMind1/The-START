var joinButton = document.getElementById("myButton");
var discordButton = document.getElementById("discordButton");
var tiktokButton = document.getElementById("tiktokButton");

joinButton.addEventListener("click", function() {
    window.location.href = "https://www.jointherealworld.com";
    function openTRWInNewTab() {
        window.open(TRWUrl, '_blank');
      }
});
discordButton.addEventListener("click", function() {
    window.location.href = "https://discord.com/invite/ZPYTN6XGXQ";
    function openDiscordInNewTab() {
        window.open(discordUrl, '_blank');
      }
});
tiktokButton.addEventListener("click", function() {
    window.location.href = "https://tiktok.com/@shit.you.dont.see";
})










var tabButton1 = document.getElementById("tabButton1");
var tabButton2 = document.getElementById("tabButton2");

var tabContent1 = document.getElementById("tabContent1");
var tabContent2 = document.getElementById("tabContent2");

tabButton1.addEventListener("click", function() {
    switchTab(tabButton1, tabContent1);
});

tabButton2.addEventListener("click", function() {
    switchTab(tabButton2, tabContent2);
});

function switchTab(tabButton, tabContent) {
    // Remove 'active' class from all tab buttons and tab contents
    tabButton1.classList.remove("active");
    tabButton2.classList.remove("active");
    tabContent1.classList.remove("active");
    tabContent2.classList.remove("active");
    
    // Add 'active' class to the clicked tab button and tab content
    tabButton.classList.add("active");
    tabContent.classList.add("active");
}

const messageElement = document.getElementById("message");
const messageText = "Hello, I'm typing a message inside the website.";
const typingDelay = 100; // Delay between each character typing
const eraseDelay = 50; // Delay before erasing the message
const pauseDelay = 2000; // Delay after the message is typed

let charIndex = 0;
let erase = false;

function typeMessage() {
    if (charIndex < messageText.length) {
        messageElement.textContent += messageText.charAt(charIndex);
        charIndex++;
    } else {
        erase = true;
    }

    if (erase) {
        if (messageElement.textContent.length > 0) {
            messageElement.textContent = messageElement.textContent.slice(0, -1);
        } else {
            erase = false;
            charIndex = 0;
            setTimeout(typeMessage, pauseDelay);
            return;
        }
    }

    setTimeout(typeMessage, erase ? eraseDelay : typingDelay);
}

const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files
app.use(express.static('public'));

// Handle POST request to store the posted text
app.post('/post', (req, res) => {
  const text = req.body.text;
  
  // Store the text on the server or in a database
  // Code to save the text to a database or file goes here
  
  res.sendStatus(200);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});







