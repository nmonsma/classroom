// Variables
const terms = document.getElementsByClassName('term')

const squares = document.getElementsByClassName('square');
const notIndicators = document.getElementsByClassName('not-indicator');

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
const syllogismButton = document.getElementById('syllogism-button');
const spmButton = document.getElementById('spm-button');
const distributionButton = document.getElementById('distribution-button');
const formButton = document.getElementsByClassName('form-button');





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
    else {console.log('syllogismFigure is not valid'); return "error"};
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
    //go through each of the terms and update the colors
function updateColors () {
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
    
    for (i=0;i<notIndicators.length;i++) {
        if(categoricalSyllogism.form[i]=='O') notIndicators[i].setAttribute('opacity',1); 
        else notIndicators[i].setAttribute('opacity',0.05);
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
    categoricalForm[0] = formButton[0].innerText;
    categoricalForm[1] = formButton[1].innerText;
    categoricalForm[2] = formButton[2].innerText;
    categoricalForm[3] = formButton[4].innerText;
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

function changeType() { 
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
    if (this.innerText>0&&this.innerText<4) this.innerText++; 
    else if (this.innerText==4) this.innerText=1; 
    applyForm();
}

//Main Actions
document.getElementById('syllogism-button').addEventListener('click', toggleSyllogismMode);
document.getElementById('spm-button').addEventListener('click', toggleSpmMode);
document.getElementById('distribution-button').addEventListener('click', toggleDistributionMode);
for (i=0;i<terms.length;i++) {
    terms[i].addEventListener('click',changeMiddle);
    terms[i].addEventListener('dblclick',changeDistribution)
}
// for (i=0;i<squares.length;i++) {
//     squares[i].addEventListener('click',changeType)
// }

for (i=0;i<formButton.length;i++) {
    formButton[i].addEventListener('click',changeType);
}
