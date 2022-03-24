// Global Variables
let answerDisplayed = '';

// Main Functions
function processKey (keyPressed) {
    if (keyPressed=="Enter") {
        document.getElementById(`question-${answerDisplayed}`).classList.remove('front');
        document.getElementsByClassName(`${answerDisplayed}`)[0].classList.add('hidden');
        answerDisplayed = '';
    }
    else if (keyPressed=="z") {
        document.getElementById(`question-${answerDisplayed}`).classList.remove('front');
        answerDisplayed = '';
    }
    else if (answerDisplayed=='') {
        document.getElementById(`question-${keyPressed}`).classList.add('front');
        answerDisplayed = `${keyPressed}`;
    }
}

// Main Actions
document.addEventListener('keydown', (e)=> {
    let keyPressed = e.key;
    console.log(keyPressed);
    processKey(keyPressed);
});