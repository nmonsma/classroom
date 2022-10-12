// Global Variables
let team1 = 0;
let team2 = 0;
let team3 = 0;
let team4 = 0;
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

function addTeam3 () {
    team3++;
    console.log("adding to team 3");
    document.getElementById('score-3').innerText = team3;
    lastAdd = 3;
}

function addTeam4 () {
    team4++;
    console.log("adding to team 4");
    document.getElementById('score-4').innerText = team4;
    lastAdd = 4;
}

function undo () {
    if (lastAdd==1) {team1--};
    if (lastAdd==2) {team2--};
    if (lastAdd==3) {team3--};
    if (lastAdd==4) {team4--};

    document.getElementById('score-1').innerText = team1;
    document.getElementById('score-2').innerText = team2;
    document.getElementById('score-3').innerText = team3;
    document.getElementById('score-4').innerText = team4;
}

// Main Actions
document.addEventListener('keydown', (e)=> {
    const keyName = e.key;
    console.log(keyName);
    if (keyName==="1") addTeam1();
    if (keyName==="2") addTeam2();
    if (keyName==="3") addTeam3();
    if (keyName==="4") addTeam4();
    if (keyName==="0") undo();
})