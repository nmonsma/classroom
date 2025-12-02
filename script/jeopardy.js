// Global Variables
let scores = [];
let answerDisplayed = '';
let valueDisplayed = 0;
let shiftDepressed = false;
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
    // console.log(this);
    if (shiftDepressed) {
        processChoice(parseInt(this.id.substr(5,6),10)+99); //If the control key is depressed, send the point value + 99 to indicate a reduction in points 
    } 
    else {
        processChoice(this.id.substr(5,6)) //Send the point value (from the element id.subst(5,6) to the processChoice function)
    }
};

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
    else if ((choiceCode>0)&&(choiceCode<100)) {
        scores[choiceCode-1]=scores[choiceCode-1]+valueDisplayed;
        increaseScores(choiceCode-1);
    }
    
    //When using number keys to remove points, remove those points:
    // else if ((choiceCode>5)&&(choiceCode<11)) {
    //     scores[choiceCode-6]=scores[choiceCode-6]-valueDisplayed;
    //     decreaseScores(choiceCode-6);
    // }

    //When using a 100-code to remove points, remove those points:
    else if ((choiceCode>99)&&(choiceCode<200)) {
        scores[choiceCode-100]=scores[choiceCode-100]-valueDisplayed;
        decreaseScores(choiceCode-100);
    }
    else if (answerDisplayed=='') {
        document.getElementById(`question-${choiceCode}`).classList.add('front');
        answerDisplayed = `${choiceCode}`;
        valueDisplayed = parseInt(document.getElementById(`item-${choiceCode}`).innerText,10);
        console.log(valueDisplayed);
    }    
}

// Main Actions

document.addEventListener('keydown', (e)=> {
    let keyPressed = e.key;
    console.log(keyPressed);
    if (keyPressed==0) {keyPressed=10};
    if (keyPressed=="Control") {shiftDepressed=true} else {processChoice(keyPressed)};
});

document.addEventListener('keyup', (e)=> {
    let keyReleased = e.key;
    if (keyReleased=="Control") {shiftDepressed=false};
});

for (i=0;i<items.length;i++) {
    items[i].addEventListener('click',processClick);
}

for (i=0;i<scoresElements.length;i++) {
    scores.push(0); //Add a list item for each score element in the html.
    scoresElements[i].addEventListener('click',processClick);
}