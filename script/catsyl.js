// Variables
const terms = document.getElementsByClassName('term')
const figure1 = document.getElementsByClassName('figure-1');
const figure2 = document.getElementsByClassName('figure-2');
const figure3 = document.getElementsByClassName('figure-3');
const figure4 = document.getElementsByClassName('figure-4');
const figureSet = [figure1, figure2, figure3, figure4];
const majors = document.getElementsByClassName('major');
const minors = document.getElementsByClassName('minor');

// Helper Functions
function highlightTerms(figure) {
    if (figure=="`") {
        for (i=0; i<terms.length; i++) {terms[i].classList.remove('highlight')}
    } else {
        for (i=0; i<figureSet[figure-1].length; i++) {figureSet[figure-1][i].classList.add('highlight')}
    }
}

function colorMajorMinor() {
    for (i=0; i<majors.length; i++) {majors[i].classList.toggle('red')};
    for (i=0; i<minors.length; i++) {minors[i].classList.toggle('blue')};
}

// Main Functions
document.addEventListener('keydown', (e)=> {
    const keyName = e.key;
    console.log(keyName);
    if (keyName==="Enter") {
        colorMajorMinor()
    } else {
        highlightTerms(keyName)
    };
});
