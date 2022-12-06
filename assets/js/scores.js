const highscores = document.getElementById('highscores');
const clearScores = document.getElementById('clear')

// get scores

const getScores = () => {
    let playerScore = localStorage.getItem('users');
    let playerScoreObj = JSON.parse(playerScore);
    return playerScoreObj.scores;
}


let scoresArr = getScores();

scoresArr.sort((a, b) => {
    return b[1] - a[1]
})


for(let i = 0; i < scoresArr.length; i++) {
    let listItem = document.createElement('li');

    let scoreStr = '';

    for(let j = 0; j < scoresArr[i].length; j++) {
        scoreStr += scoresArr[i][j] + ' ';
    }
    
    listItem.textContent = scoreStr;
    highscores.appendChild(listItem);
}

// event listeners

clearScores.addEventListener('click', () => {
    localStorage.clear();
    location.reload();
})