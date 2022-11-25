// Global Variables
let scores = [0,0,0,0];
let answerDisplayed = '';
let valueDisplayed = 0;
const items = document.getElementsByClassName('item');
const scoresElements = document.getElementsByClassName('scores');

//Helper Functions
function updateScores(i) {
    scoresElements[i].innerText = scores[i];
    scoresElements[i].classList.add('updated');
    setTimeout(()=>{scoresElements[i].classList.remove('updated')},600);
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
    else if ((choiceCode>0)&&(choiceCode<5)) {
        scores[choiceCode-1]=scores[choiceCode-1]+valueDisplayed;
        updateScores(choiceCode-1);
    }
    else if ((choiceCode>4)&&(choiceCode<9)) {
        scores[choiceCode-5]=scores[choiceCode-5]-valueDisplayed;
        updateScores(choiceCode-5);
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
    processChoice(keyPressed);
});

for (i=0;i<items.length;i++) {
    items[i].addEventListener('click',processClick);
}

for (i=0;i<scoresElements.length;i++) {
    scoresElements[i].addEventListener('click',processClick);
}