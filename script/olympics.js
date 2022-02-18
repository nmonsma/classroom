// Global Variables
let team1 = 0;
let team2 = 0;
let lastAdd = 0;
let averageScore = 0;

// Main Functions
function gatherScores () {
    const scoresObjects = document.getElementsByClassName('judge-score');
    let scores = [];
    averageScore = 0;
    for (let i=0; i < scoresObjects.length; i++) {
        scores.push(scoresObjects[i].value);
        averageScore = averageScore + +scoresObjects[i].value;
    } 
    console.log(`List of scores ${scores}`);
    console.log(`Total of scores: ${averageScore}`);
    console.log(Math.max.apply(null, scores));
    console.log(Math.min.apply(null, scores));
    averageScore = averageScore - +Math.max.apply(null, scores);
    averageScore = averageScore - +Math.min.apply(null, scores);
    console.log(averageScore);
    averageScore = averageScore / 3;
    averageScore = +Math.round(averageScore * 10) / 10;
    document.getElementById('average-score').innerText = averageScore;
}

function addTeam1 () {
    team1 = team1 + averageScore;
    console.log("adding to team 1");
    document.getElementById('score-1').innerText = team1;
    lastAdd = 1;
}

function addTeam2 () {
    team2 = team2 + averageScore;
    console.log("adding to team 2");
    document.getElementById('score-2').innerText = team2;
    lastAdd = 2;
}

function undo () {
    if (lastAdd==1) {team1--};
    if (lastAdd==2) {team2--};
    document.getElementById('score-1').innerText = team1;
    document.getElementById('score-2').innerText = team2;
}

// Main Actions

document.getElementById('score-1').addEventListener('click', addTeam1);
document.getElementById('score-2').addEventListener('click', addTeam2);
document.getElementById('average-score').addEventListener('click', gatherScores);