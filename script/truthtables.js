// Global Variables
const symbols=document.getElementsByClassName('symbolics');
const truthValues=document.getElementsByClassName('tf');
const indicators=document.getElementsByClassName('step-indicator');
let stepColors = ['128, 128, 128', '192, 0, 0', '165, 128, 0', '85, 165, 85', '85, 85 , 255', '255, 128, 255'];
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

function tfColor() {
    if (this.value=='') {
        this.style.backgroundColor=`white`;
        for (i=0;i<indicators.length;i++) {this.classList.remove(`step-${i}`)};
    } else {
        console.log('updating color');
        // this.style.color=`rgb(${stepColors[stepIndex]})`;
        this.style.backgroundColor=`rgba(${stepColors[stepIndex]}, 0.2)`;
        for (i=0;i<indicators.length;i++) {this.classList.remove(`step-${i}`)};
        this.classList.add(`step-${stepIndex}`);
    }
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

function unzoomSteps() {
    for (i=0;i<truthValues.length;i++) {
        truthValues[i].style.padding=`0vh`
        truthValues[i].style.margin=`0 0 0 0`
        truthValues[i].style.zIndex=`0`
        truthValues[i].style.fontSize=`5vh`          
    }
}

function zoomSteps() {
    for (i=0;i<truthValues.length;i++) {
        for (j=0;j<stepColors.length;j++) {
            if (truthValues[i].classList.contains(`step-${j}`)) {
                truthValues[i].style.padding=`${j}vh`
                truthValues[i].style.margin=`${3*j}vh ${-j}vh 0 ${-j}vh`
                truthValues[i].style.zIndex=`${j}`
                truthValues[i].style.fontSize=`${5+j}vh`       
            }           
        }
    }
}

// Main Actions
for (i=0;i<symbols.length;i++) {
    symbols[i].addEventListener('input', updateSymbols)    
}
for (i=0;i<truthValues.length;i++) {
    truthValues[i].addEventListener('dblclick', tfColor)    
}
for (i=0;i<indicators.length;i++) {
    indicators[i].style.color=`rgb(${stepColors[i]})`;
    indicators[i].addEventListener('click', changeStep);
}
indicators[0].style.backgroundColor='#ccc';
document.addEventListener('keydown', (e)=> {
    const keyName = e.key;
    console.log(keyName);
    if (keyName==="PageDown") separateSteps();
    if (keyName==="PageUp") combineSteps();
    if (keyName==="ArrowDown") zoomSteps();
    if (keyName==="ArrowUp") unzoomSteps();
})
