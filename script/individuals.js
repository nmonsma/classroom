// Global Variables
let team1 = 0;
let team2 = 0;
let team3 = 0;
let team4 = 0;
let lastAdd = 0;
const scoresObjects = document.getElementsByClassName('score');
let scoresArray = [];

//Helper Functions

// Main Functions
function addTo (i) {
    const scoreBox = scoresObjects[i];
    scoresArray[i]++;
    scoreBox.innerText = scoresArray[i];
    scoreBox.classList.add('increased');
    setTimeout(()=>{scoreBox.classList.remove('increased')},600);
    lastAdd = i;
}

function undo () {
    scoresArray[lastAdd]--;
    scoresObjects[lastAdd].innerText = scoresArray[lastAdd];
}

function processClick() {
    console.log(`id-selector:${this.id.substr(6,2)}`);
    addTo(this.id.substr(6,2));
}


// Main Actions
for (i=0;i<scoresObjects.length;i++) {
    scoresObjects[i].addEventListener('click',processClick);
}

document.addEventListener('keydown', (e)=> {
    const keyName = e.key;
    console.log(keyName);
    if (keyName==="0") undo();
});

for (let i=0; i<16; i++) {
    if (i/2==Math.floor(i/2) ) {
        document.getElementById(`score-${i}`).style.backgroundColor = `hsl(${54-3*i*(i/2+1)},100%,70%)`;
    } else {
        document.getElementById(`score-${16-i}`).style.backgroundColor = `hsl(${30-3*(i-0.5)*(i/2+1)},100%,50%)`;
        // document.getElementById(`score-${16-i}`).style.color = `white`;
    }
    scoresArray.push(0);
}