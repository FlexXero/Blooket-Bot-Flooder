const botName = prompt("Enter the base name for bots:");
const gamePin = prompt("Enter the game PIN:");
const botCount = parseInt(prompt("Enter the number of bots:"), 10);

if (isNaN(botCount) || botCount <= 0) {
  console.error("Invalid number of bots. Please enter a positive integer.");
} else {
  console.log('%c Created by Faded :D', 'background: #222; color: yellow');

  for (let i = 0; i < botCount; i++) {
    const botNameWithIndex = `${botName}${i + 1}`; 

    fetch("https://api.blooket.com/api/firebase/join", {
      headers: {
        "accept": "application/json, text/plain, */*",
        "content-type": "application/json;charset=UTF-8"
      },
      referrer: "https://www.blooket.com/",
      referrerPolicy: "strict-origin-when-cross-origin",
      body: JSON.stringify({
        id: gamePin,
        name: botNameWithIndex
      }),
      method: "PUT",
      mode: "cors",
      credentials: "omit"
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`Failed to add bot ${botNameWithIndex}`);
        }
        return response.json();
      })
      .then(data => {
        console.log(`Bot ${botNameWithIndex} joined successfully`, data);
      })
      .catch(error => {
        console.error(`Error with bot ${botNameWithIndex}:`, error);
      });
  }
}
