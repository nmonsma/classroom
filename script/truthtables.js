// Global Variables
const symbols=document.getElementsByClassName('symbolics');
const truthValues=document.getElementsByClassName('tf');
const indicators=document.getElementsByClassName('step-indicator');
let stepColors = ['black', 'saddlebrown', 'orange', 'darkgreen', 'darkblue', 'violet'];
let stepIndex = 0;


// Main Functions
function updateSymbols() {
    console.log('updating');
    for (i=0;i<symbols.length;i++) {
        if (symbols[i].value==','){symbols[i].value='\u2283'} else
        if (symbols[i].value=='.'){symbols[i].value='\u2022'} else
        if (symbols[i].value=='/'){symbols[i].value='\u2228'} else
        if (symbols[i].value=='-'){symbols[i].value='\u223c'} else
        if (symbols[i].value=='='){symbols[i].value='\u2261'} else
        if (symbols[i].value==';'){symbols[i].value='\u2234'}  
    }
}

function changeStep() {
    indicators[stepIndex].style.backgroundColor='#eee';
    stepIndex=this.innerText;
    indicators[stepIndex].style.backgroundColor='#ccc';
}

function stepColor() {
    console.log('updating color');
    this.style.color=stepColors[stepIndex];
    for (i=0;i<indicators.length;i++) {this.classList.remove(`step-${i}`)};
    this.classList.add(`step-${stepIndex}`);
}

function separateSteps() {
    for (i=0;i<truthValues.length;i++) {
        for (j=0;j<stepColors.length;j++) {
            if (truthValues[i].classList.contains(`step-${j}`)) {truthValues[i].style.marginTop=`${j*4}vh`}
        }
    }
}

function combineSteps() {
    for (i=0;i<truthValues.length;i++) {truthValues[i].style.marginTop=`0vh`}
}

// Main Actions
for (i=0;i<symbols.length;i++) {
    symbols[i].addEventListener('input', updateSymbols)    
}
for (i=0;i<truthValues.length;i++) {
    truthValues[i].addEventListener('input', stepColor)    
}
for (i=0;i<indicators.length;i++) {
    indicators[i].style.color=stepColors[i];
    indicators[i].addEventListener('click', changeStep);
}
indicators[0].style.backgroundColor='#ccc';
document.addEventListener('keydown', (e)=> {
    const keyName = e.key;
    console.log(keyName);
    if (keyName==="PageDown") separateSteps();
    if (keyName==="PageUp") combineSteps();
})
