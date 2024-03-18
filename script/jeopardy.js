// Global Variables
let scores = [0,0,0,0,0];
let answerDisplayed = '';
let valueDisplayed = 0;
const items = document.getElementsByClassName('item');
const scoresElements = document.getElementsByClassName('scores');

//Helper Functions
function increaseScores(i) {
    scoresElements[i].innerText = scores[i];
    scoresElements[i].classList.add('increased');
    setTimeout(()=>{scoresElements[i].classList.remove('increased')},600);
}

function decreaseScores(i) {
    scoresElements[i].innerText = scores[i];
    scoresElements[i].classList.add('decreased');
    setTimeout(()=>{scoresElements[i].classList.remove('decreased')},600);
}


function processClick() {
    processChoice(this.id.substr(5,6));
    console.log(this.id.substr(5,6));
}

// Main Functions
function processChoice(choiceCode) {
    if (choiceCode=="Enter") {
        document.getElementById(`question-${answerDisplayed}`).classList.remove('front');
        document.getElementById(`item-${answerDisplayed}`).classList.add('hidden');
        answerDisplayed = '';
        valueDisplayed = 0;
    }
    else if (choiceCode=="Escape") {
        document.getElementById(`question-${answerDisplayed}`).classList.remove('front');
        answerDisplayed = '';
        valueDisplayed = 0;
    }
    else if ((choiceCode>0)&&(choiceCode<6)) {
        scores[choiceCode-1]=scores[choiceCode-1]+valueDisplayed;
        increaseScores(choiceCode-1);
    }
    else if ((choiceCode>5)&&(choiceCode<11)) {
        scores[choiceCode-6]=scores[choiceCode-6]-valueDisplayed;
        decreaseScores(choiceCode-6);
    }
    else if (answerDisplayed=='') {
        document.getElementById(`question-${choiceCode}`).classList.add('front');
        answerDisplayed = `${choiceCode}`;
        valueDisplayed = parseInt(document.getElementById(`item-${choiceCode}`).innerText, 10);
        console.log(valueDisplayed);
    }    
}

// Main Actions
document.addEventListener('keydown', (e)=> {
    let keyPressed = e.key;
    if (keyPressed==0) {keyPressed=10};
    processChoice(keyPressed);
});

for (i=0;i<items.length;i++) {
    items[i].addEventListener('click',processClick);
}

for (i=0;i<scoresElements.length;i++) {
    scoresElements[i].addEventListener('click',processClick);
}