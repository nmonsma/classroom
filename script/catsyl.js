// Variables
const terms = document.getElementsByClassName('term')

const squares = document.getElementsByClassName('square');
const notIndicators = document.getElementsByClassName('not-indicator');

const propositions = document.getElementsByClassName('proposition')
const premises = document.getElementsByClassName('premise');
const conclusion = document.getElementById('conclusion');

const vowels = ['A','E','I','O','A'];

    //create the Form and Syllogism array/JSON 
let categoricalForm = ['A','A','A',1];
let categoricalSyllogism = {
    "statements": [
        {
            "type": "A",
            "distribution": [true, false],
            "middle": [true, false]
        },
        {
            "type": "A",
            "distribution": [true, false],
            "middle": [false, true]
        },
        {
            "type": "A",
            "distribution": [true, false],
            "middle": [false, false]
        }
        ],
    "form": ['A','A','A',1]
};


    //set the toggle buttons as constants to allow easier use
const aeioButton = document.getElementById('aeio-button');
const syllogismButton = document.getElementById('syllogism-button');
const spmButton = document.getElementById('spm-button');
const distributionButton = document.getElementById('distribution-button');
const moodButton = document.getElementsByClassName('mood-button');
const figureButton = document.getElementById('figure');

let showAEIO = 0;
let figure = 0;

// Helper Functions

    //return the distribution of [subject, predicate] based on the categorical type (A, E, I, O) passed to the function 
function isDistributed(categoricalType) {
    if (categoricalType=="A") return [true,false];
    else if (categoricalType=="E") return [true,true];
    else if (categoricalType=="I") return [false,false];
    else if (categoricalType=="O") return [false,true];
    else {console.log('categoricalType is not valid'); return "error"};
}

    //return as an array of three arrays (true,false) the location of the middle term in the respective subject, predicate of the major premise, minor premise, and conclusion based on the figure (1,2,3,4) passed to the function
function isMiddle(syllogismFigure) {
    if (syllogismFigure==1) return [[true,false],[false,true],[false,false]];
    else if (syllogismFigure==2) return [[false,true],[false,true],[false,false]];
    else if (syllogismFigure==3) return [[true,false],[true,false],[false,false]];
    else if (syllogismFigure==4) return [[false,true],[true,false],[false,false]];
    else {console.log('syllogismFigure is not valid'); return [[false,false],[false,false],[false,false]]};
}

    //return the figure of the categorical syllogism represented by the categoricalSyllogism JSON
function isFigure() {
    let middles = [categoricalSyllogism.statements[0].middle,categoricalSyllogism.statements[1].middle];
    if (middles[0][0]) {
        if (middles[1][1]) return 1;
        else return 3;
    } else {
        if (middles[1][1]) return 4;
        else return 2;
    }
}


// Main Functions
    //go through each of the terms and update the markup
function updateColors () {
    console.log('updating display');
    //create a list trues and falses that corresponds to whether each term is middle    
    let middleFinder = [
        categoricalSyllogism.statements[0].middle[0],
        categoricalSyllogism.statements[0].middle[1],
        categoricalSyllogism.statements[1].middle[0],
        categoricalSyllogism.statements[1].middle[1],
        categoricalSyllogism.statements[2].middle[0],
        categoricalSyllogism.statements[2].middle[1]
    ];

    //create a list of trues and falses that corresponds to whether each term is distributed
    let distributedFinder = [
        categoricalSyllogism.statements[0].distribution[0],
        categoricalSyllogism.statements[0].distribution[1],
        categoricalSyllogism.statements[1].distribution[0],
        categoricalSyllogism.statements[1].distribution[1],
        categoricalSyllogism.statements[2].distribution[0],
        categoricalSyllogism.statements[2].distribution[1]
    ]
    
    //iterate through the quantifer indicators and update the opacities
    if (aeioButton.classList.contains('depressed')) {showAEIO = 1} else {showAEIO = 0};

    for (i=0;i<notIndicators.length;i++) {

        //create a list of the current statement's aeios
        const aeios = propositions[i].getElementsByClassName('aeio');
        
        //set the aeios and notIndicator to showAEIO opacity based on the form
        if(categoricalSyllogism.form[i]=='A') { aeios[0].setAttribute('opacity',showAEIO) }
            else { aeios[0].setAttribute('opacity',0); }
        if(categoricalSyllogism.form[i]=='E') { aeios[1].setAttribute('opacity',showAEIO) } 
            else { aeios[1].setAttribute('opacity',0); }
        if(categoricalSyllogism.form[i]=='I') { aeios[2].setAttribute('opacity',showAEIO) }
            else { aeios[2].setAttribute('opacity',0); }
        if(categoricalSyllogism.form[i]=='O') {
            notIndicators[i].setAttribute('opacity',showAEIO); 
            aeios[3].setAttribute('opacity',showAEIO) }
        else {
            aeios[3].setAttribute('opacity',0);
            notIndicators[i].setAttribute('opacity',0); }
    }


    for (i=0;i<terms.length;i++) {
        terms[i].classList.remove('yellow');
        terms[i].classList.remove('red');
        terms[i].classList.remove('blue');
        if(spmButton.classList.contains('depressed')) {
            if (middleFinder[i]) terms[i].classList.add('yellow')
            else if (terms[i].classList.contains('major')) 
                    terms[i].classList.add('red')
                else 
                    terms[i].classList.add('blue');
        }
        
        if(distributionButton.classList.contains('depressed')) {
            if (!distributedFinder[i]) terms[i].setAttribute('stroke-dasharray', '10%, 22%')
            else terms[i].setAttribute('stroke-dasharray', 'none');
        } else {
            terms[i].setAttribute('stroke-dasharray', 'none')
        }
    }
}

    //go through the categoricalSyllogism JSON and correct it (iron it out) based on the categoricalForm array
function ironOutSyllogism() {
    for (i=0; i<3; i++) {
        categoricalSyllogism.statements[i].type = categoricalForm[i];
        categoricalSyllogism.statements[i].distribution = isDistributed(categoricalForm[i]);
        categoricalSyllogism.statements[i].middle = isMiddle(categoricalForm[3])[i];
    }
    categoricalSyllogism.form = categoricalForm;
    updateColors();
}

    //go through the categoricalForm array and correct it (iron it out) based on the categoricalSyllogism JSON
function ironOutForm() {
    for (i=0; i<3; i++) {
        categoricalForm[i] = categoricalSyllogism.statements[i].type;
        categoricalSyllogism.statements[i].distribution = isDistributed(categoricalForm[i]);
        categoricalSyllogism.form[i] = categoricalSyllogism.statements[i].type;
    }
    categoricalSyllogism.form[3] = isFigure();
    categoricalForm[3] = categoricalSyllogism.form[3];
    updateColors();
}

function applyForm() {
    categoricalForm[0] = moodButton[0].innerText;
    categoricalForm[1] = moodButton[1].innerText;
    categoricalForm[2] = moodButton[2].innerText;
    categoricalForm[3] = figure;
    ironOutSyllogism();
}

function toggleSyllogismMode() {
    syllogismButton.classList.toggle('depressed');
    if (syllogismButton.innerText!="Statement") {
        syllogismButton.innerText="Statement"
    } else {
        syllogismButton.innerText="Syllogism"
    }
    for(let i=0; i<premises.length; i++) {
        premises[i].classList.toggle('shown')
    }
    conclusion.classList.toggle('bottom');
}

function toggleAEIOMode () {
    aeioButton.classList.toggle('depressed');
    updateColors();
}

function toggleSpmMode () {
    spmButton.classList.toggle('depressed');
    updateColors();
}

function toggleDistributionMode () {
    distributionButton.classList.toggle('depressed');
    // if (distributionButton.classList.contains('depressed')&&!spmButton.classList.contains('depressed')) toggleSpmMode(); //Toggle SPM mode whenever Distribution Mode is turned on
    updateColors();
}

function changeMiddle() {

}

function changeDistribution() {

}

function changeMood() { 
    let i = 0;
    let exitNow = 0;
    console.log (this.innerText);    
    while (exitNow==0&&i<4) {
        console.log(vowels[i],this.innerText==vowels[i]);
        if (this.innerText==vowels[i]) { 
            this.innerText=vowels[i+1]
            exitNow = 1;
        };
        i++; 
    }
    applyForm();
}

function changeFigure() {
    figure++;
    if (figure==5) figure=0;
    if (figure==0) {this.innerText=""} else {this.innerText=figure};
    applyForm();
}

//Main Actions
aeioButton.addEventListener('click', toggleAEIOMode);
syllogismButton.addEventListener('click', toggleSyllogismMode);
spmButton.addEventListener('click', toggleSpmMode);
distributionButton.addEventListener('click', toggleDistributionMode);
for (i=0;i<terms.length;i++) {
    terms[i].addEventListener('click',changeMiddle);
    terms[i].addEventListener('dblclick',changeDistribution)
}
// for (i=0;i<squares.length;i++) {
//     squares[i].addEventListener('click',changeType)
// }

for (i=0;i<moodButton.length;i++) {
    moodButton[i].addEventListener('click',changeMood);
}

figureButton.addEventListener('click',changeFigure);


