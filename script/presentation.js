// Global Variables
let fileList = [""]
let team2 = 0;
let lastAdd = 0;

// Main Functions
function addTeam1 () {
    team1++;
    console.log("adding to team 1");
    document.getElementById('score-1').innerText = team1;
    lastAdd = 1;
}

function addTeam2 () {
    team2++;
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
document.addEventListener('keydown', (e)=> {
    const keyName = e.key;
    console.log(keyName);
    if (keyName==="1") addTeam1();
    if (keyName==="2") addTeam2();
    if (keyName==="0") undo();
})