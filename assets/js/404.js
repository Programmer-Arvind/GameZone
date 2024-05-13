let games;
async function fetchData() {
    await fetch("./assets/js/gamesData.json")
      .then((response) => response.json())
      .then((gamesData) => {games = gamesData});
}

fetchData().then(() => {
    function pickRandomGame(){
        const numOfGames = Object.keys(games).length;
        const randomIndex = Math.floor(Math.random() * numOfGames) + 1;
        return games[randomIndex.toString()];
    }
    
    randomGame = pickRandomGame();
    console.log(randomGame["gameTitle"])
    
    document.querySelector(".random-game").innerHTML = `<a href="./Games/${randomGame['gameUrl']}">${randomGame['gameTitle']}</a>`;
}
)