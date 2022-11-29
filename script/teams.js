// Global Variables
let team1 = 0;
let team2 = 0;
let team3 = 0;
let team4 = 0;
let lastAdd = 0;

// Main Functions
function addTeam1 () {
    team1++;
    const scoreBox = document.getElementById('score-1');
    scoreBox.innerText = team1;
    scoreBox.classList.add('increased');
    setTimeout(()=>{scoreBox.classList.remove('increased')},600);
    lastAdd = 1;
}

function addTeam2 () {
    team2++;
    const scoreBox = document.getElementById('score-2');
    scoreBox.innerText = team2;
    scoreBox.classList.add('increased');
    setTimeout(()=>{scoreBox.classList.remove('increased')},600);
    lastAdd = 2;
}

function addTeam3 () {
    team3++;
    const scoreBox = document.getElementById('score-3');
    scoreBox.innerText = team3;
    scoreBox.classList.add('increased');
    setTimeout(()=>{scoreBox.classList.remove('increased')},600);
    lastAdd = 3;
}

function addTeam4 () {
    team4++;
    const scoreBox = document.getElementById('score-4');
    scoreBox.innerText = team4;
    scoreBox.classList.add('increased');
    setTimeout(()=>{scoreBox.classList.remove('increased')},600);
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