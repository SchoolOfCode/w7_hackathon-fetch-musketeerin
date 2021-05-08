const newJokeButton = document.getElementById("text-jokes");
const listHistory = document.getElementById("jokes-history")

// we want to make a dynamic webpage of dad jokes
// interactivity via button click
// we want to keep each returned joke on page
// page display: 
// -   interesting dad photo,
// -   button - to display joke text,
// -    button = to display joke image 
// -   a list of previous jokes

async function getDadTextJokes() {
    const requestTextJoke = await fetch("https://icanhazdadjoke.com/", {
        headers: { accept: "application/json" },
    });
    const textResponse = await requestTextJoke.json();
    console.log(textResponse);
}

getDadTextJokes();

async function getDadImageJokes() {
    const requestImageJoke = await fetch("https://icanhazdadjoke.com/j/<joke_id>.png", {
        headers: { accept: "application/json" },
    });
    const imageResponse = await requestImageJoke.json();
    console.log(imageResponse);
}

getDadImageJokes();

// connect button to generate random dad text jokes

newJokeButton.addEventListener("click", getDadTextJokes)

// display dad joke on webpage

function addJokeToList(string) {
    const li = document.createElement("li");

    const listItem = document.createTextNode(string);
    li.appendChild(listItem);
    listHistory.appendChild(li);
}
