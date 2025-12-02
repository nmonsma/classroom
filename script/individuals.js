// Global Variables
let team1 = 0;
let team2 = 0;
let team3 = 0;
let team4 = 0;
let lastAdd = 0;
const scoresObjects = document.getElementsByClassName('score');
let scoresArray = [];
const colorsObject = {
    "h": [  0,  0, 30, 60,110,   150,215,235,288,324],
    "s": [  0,100,100,100, 80,   100,100, 60,100,100],
    "l": [100, 50, 50, 50, 50,    67, 45, 77, 45, 50]
}

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
    console.log(`id-selector:${this.id.substr(6,1)}`);
    addTo(this.id.substr(6,2));
}


// Main Actions
for (i=0;i<scoresObjects.length;i++) {
    scoresObjects[i].addEventListener('click',processClick);
    document.getElementById(`score-${i}`).style.backgroundColor = `hsl(${colorsObject.h[i]},${colorsObject.s[i]}%,${colorsObject.l[i]}%)`;
    scoresArray.push(0);
}

document.addEventListener('keydown', (e)=> {
    const keyName = e.key;
    console.log(keyName);
    if (keyName==="0") undo();
});
