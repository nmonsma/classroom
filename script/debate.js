// Global Variables
const structureObj = {
    'speeches': ['1ac','1ac-cx','1nc','1nc-cx','2ac', '2ac', '2ac-cx', '2nc', '2nc-cx', '1nr', '1ar', '2nr', '2ar'],
    'times': [240000,90000,240000,90000,240000,90000,240000,90000,150000,150000,150000,150000],
    'preptime': 150000
}
const clockObj = document.getElementById('time');
let clockRunning = 0;
let clock = structureObj.times[0];
let referenceTime = 0;
let affClock = structureObj.preptime;
let affReferenceTime = 0;
let negClock = structureObj.preptime;
let negReferenceTime = 0;

let tInterval = 0;

//Helper Functions
function getTime () {
    return Date.now();
}

function setReferenceTime () {
    const now = getTime();
    referenceTime = now + clock;
    console.log(`${now}, ${referenceTime}`);
}

function setAffReferenceTime () {
    const now = getTime();
    affReferenceTime = now + affClock;
}

function setNegReferenceTime () {
    const now = getTime();
    negReferenceTime = now + negClock;
}

function updateClock () {
    if (clockRunning) {
        const now = getTime();
        clock = referenceTime - now;
    }
    let minutes = Math.floor((clock)/60000);
    let seconds = Math.floor((clock-(minutes*60000))/1000);
    minutes = minutes.toFixed(0);
    seconds = seconds.toFixed(0);
    clockObj.innerText = minutes + ":" + seconds.padStart(2,'0');
}

// Main Functions
function advanceClock () {
    if (!clockRunning) {
        setReferenceTime();
        tInterval = setInterval(updateClock,50);
        clockRunning = 1;    
    } else {
        clearInterval(tInterval);
        clockRunning = 0;
    }  
}

function processKeypress (e) {
    const keyName = e.key;
    //Team 1 Score Event Listeners
    if (keyName===" ") advanceClock();
}


// Main Actions
setReferenceTime();
updateClock();
document.addEventListener('keydown', processKeypress);

