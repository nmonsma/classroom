// Variables
const calcSpace = document.getElementById('calc-space');
const orderSpace = document.getElementById('order-space');
let testIdentifier = '';   


const key = {
    "calculations": [
        {"problem": "T \u2022 T", "solution":"T", "used": 0},
        {"problem": "T \u2022 F", "solution":"F", "used": 0},
        {"problem": "F \u2022 T", "solution":"F", "used": 0},
        {"problem": "F \u2022 F", "solution":"F", "used": 0},
        {"problem": "T \u2228 T", "solution":"T", "used": 0},
        {"problem": "T \u2228 F", "solution":"T", "used": 0},
        {"problem": "F \u2228 T", "solution":"T", "used": 0},
        {"problem": "F \u2228 F", "solution":"F", "used": 0},
        {"problem": "T \u2283 T", "solution":"T", "used": 0},
        {"problem": "T \u2283 F", "solution":"F", "used": 0},
        {"problem": "F \u2283 T", "solution":"T", "used": 0},
        {"problem": "F \u2283 F", "solution":"T", "used": 0},
        {"problem": "T \u2261 T", "solution":"T", "used": 0},
        {"problem": "T \u2261 F", "solution":"F", "used": 0},
        {"problem": "F \u2261 T", "solution":"F", "used": 0},
        {"problem": "F \u2261 F", "solution":"T", "used": 0}
    ],
    "resolutions": [
        {"problem": "? \u2022 ? = T", "solution": "T T", "used": 0},
        {"problem": "? \u2022 ? = F", "solution": "? ?", "used": 0},
        {"problem": "? \u2022 T = F", "solution": "F", "used": 0},
        {"problem": "? \u2022 F = F", "solution": "?", "used": 0},
        {"problem": "T \u2022 ? = F", "solution": "F", "used": 0},
        {"problem": "F \u2022 ? = F", "solution": "?", "used": 0},

        {"problem": "? \u2228 ? = F", "solution": "F F", "used": 0},
        {"problem": "? \u2228 ? = T", "solution": "? ?", "used": 0},
        {"problem": "T \u2228 ? = T", "solution": "?", "used": 0},
        {"problem": "F \u2228 ? = T", "solution": "T", "used": 0},
        {"problem": "F \u2228 ? = F", "solution": "F", "used": 0},
        {"problem": "? \u2228 T = T", "solution": "?", "used": 0},
        {"problem": "? \u2228 F = T", "solution": "T", "used": 0},
        {"problem": "? \u2228 F = F", "solution": "F", "used": 0},

        {"problem": "? \u2283 ? = F", "solution": "T F", "used": 0},
        {"problem": "? \u2283 ? = T", "solution": "? ?", "used": 0},
        {"problem": "T \u2283 ? = T", "solution": "T", "used": 0},
        {"problem": "T \u2283 ? = F", "solution": "F", "used": 0},
        {"problem": "F \u2283 ? = T", "solution": "?", "used": 0},
        {"problem": "? \u2283 T = T", "solution": "?", "used": 0},
        {"problem": "? \u2283 F = T", "solution": "F", "used": 0},
        {"problem": "? \u2283 F = F", "solution": "T", "used": 0},

        {"problem": "? \u2261 ? = T", "solution": "? ?", "used": 0},
        {"problem": "? \u2261 ? = F", "solution": "? ?", "used": 0},
        {"problem": "T \u2261 ? = T", "solution": "T", "used": 0},
        {"problem": "T \u2261 ? = F", "solution": "F", "used": 0},
        {"problem": "F \u2261 ? = T", "solution": "F", "used": 0},
        {"problem": "F \u2261 ? = F", "solution": "T", "used": 0},
        {"problem": "? \u2261 T = T", "solution": "T", "used": 0},
        {"problem": "? \u2261 T = F", "solution": "F", "used": 0},
        {"problem": "? \u2261 F = T", "solution": "F", "used": 0},
        {"problem": "? \u2261 F = F", "solution": "T", "used": 0}
    ],
    "order": [
        {"problem": "(p\u2283q)\u2261~r", "solution": [6,2,5], "used": 0},
        {"problem": "~(p\u2261q)", "solution": [3,0], "used": 0},
        {"problem": "~(p\u2228q)\u2283r", "solution": [3,0,6], "used": 0},
        {"problem": "[p\u2228(q\u2283r)]\u2022~s", "solution": [10,5,2,9], "used": 0},
        {"problem": "p\u2283~(q\u2228r)", "solution": [5,2,1], "used": 0},
        {"problem": "(~p\u2022q)\u2228r", "solution": [1,3,6], "used": 0}
    ]
}


// Helper Functions
function createCalculationQuestion() {

    //Create major DOM elements
    const createdDiv = document.createElement('div');
    createdDiv.classList.add('question');
    createdDiv.classList.add('calculation');

    //Find a question that hasn't been used yet, and select that question.
    let questionNumber = 0;
    let StillNeedAQuestion = 1;
    while (StillNeedAQuestion==1) {
        questionNumber = Math.floor(Math.random()*key.calculations.length);
        StillNeedAQuestion = key.calculations[questionNumber].used;
    }
    key.calculations[questionNumber].used = 1;
    
    //Create minor DOM elements
    const problemParagraph = document.createElement('p');
    const problemText = key.calculations[questionNumber].problem;
    problemParagraph.classList.add('problem');
    problemParagraph.innerText = `${problemText}`;
    
    const solutionParagraph = document.createElement('p');
    const solutionText = key.calculations[questionNumber].solution;
    solutionParagraph.classList.add('solution');
    solutionParagraph.classList.add('invisible');
    solutionParagraph.innerText = `${solutionText}`;

    //Put all DOM elements together
    createdDiv.appendChild(problemParagraph);
    createdDiv.appendChild(solutionParagraph);

    //Add to testIdentifier
    testIdentifier += `${questionNumber.toString(32)}`; 

    return createdDiv;
}

function createResolutionQuestion() {
    //Create major DOM elements
    const createdDiv = document.createElement('div');
    createdDiv.classList.add('question');
    createdDiv.classList.add('resolution');

    //Find a question that hasn't been used yet, and select that question.
    let questionNumber = 0;
    let StillNeedAQuestion = 1;
    while (StillNeedAQuestion==1) {
        questionNumber = Math.floor(Math.random()*key.resolutions.length);
        StillNeedAQuestion = key.resolutions[questionNumber].used;
    }
    key.resolutions[questionNumber].used = 1;
    
    //Create minor DOM elements
    const problemParagraph = document.createElement('p');
    const problemText = key.resolutions[questionNumber].problem;
    problemParagraph.classList.add('problem');
    problemParagraph.innerText = `${problemText}`;
    
    const solutionParagraph = document.createElement('p');
    const solutionText = key.resolutions[questionNumber].solution;
    solutionParagraph.classList.add('solution');
    solutionParagraph.classList.add('invisible');
    solutionParagraph.innerText = `${solutionText}`;

    //Put all the DOM elements together
    createdDiv.appendChild(problemParagraph);
    createdDiv.appendChild(solutionParagraph);

    //Add to testIdentifier
    testIdentifier += `${questionNumber.toString(32)}`;

    return createdDiv;
}

function createOrderQuestion() {
    const createdDiv = document.createElement('div');
    createdDiv.classList.add('order-question');
    createdDiv.classList.add('order');

    //Find a question that hasn't been used yet, and select that question.
    let questionNumber = 0;
    let StillNeedAQuestion = 1;
    while (StillNeedAQuestion==1) {
        questionNumber = Math.floor(Math.random()*key.order.length);
        StillNeedAQuestion = key.order[questionNumber].used;
    }
    key.order[questionNumber].used = 1;

    //Pick a step number from the chosen question
    const stepNumber = Math.floor(Math.random()*(key.order[questionNumber].solution.length));
    
    const problemParagraph = document.createElement('p');
    const problemText = key.order[questionNumber].problem;
    problemParagraph.classList.add('order-problem');
    problemParagraph.innerHTML = `${problemText}<br>Once you know the values of the variables, which operator would be step ${stepNumber+1} in the order of operations?`;
    
    const solutionParagraph = document.createElement('p');
    const solutionText = key.order[questionNumber].problem.charAt(key.order[questionNumber].solution[stepNumber]);
    solutionParagraph.classList.add('solution');
    solutionParagraph.classList.add('invisible');
    solutionParagraph.innerText = `${solutionText}`;

    createdDiv.appendChild(problemParagraph);
    createdDiv.appendChild(solutionParagraph);

    //Add to testIdentifier
    const questionIdentifier = (questionNumber*4)+stepNumber;
    testIdentifier += `${questionIdentifier.toString(32)}`;
    
    return createdDiv;
}

// Main Functions

function toggleSolutions() {
    const solutionsObjects = document.getElementsByClassName('solution');
    for (i=0;i<solutionsObjects.length;i++) {
        solutionsObjects[i].classList.toggle('invisible');
    }
 }

function toggleSolution () {
    this.classList.toggle('invisible');
}

function createTest() {
    testIdentifier = '';   
    for (i=0;i<7;i++) {
        const childElement = createCalculationQuestion();
        calcSpace.appendChild(childElement);
    }
    for (i=0;i<13;i++) {
        const childElement = createResolutionQuestion();
        calcSpace.appendChild(childElement);
    }
    const titleSpace = document.createElement('p');
    titleSpace.id = "title-space";  
    titleSpace.innerHTML = `Name: ________________<br><br>Date: __________`;
    orderSpace.appendChild(titleSpace);

    for (i=0;i<5;i++) {
        const childElement = createOrderQuestion();
        orderSpace.appendChild(childElement);
    }

    const identifierSpace = document.createElement('p');
    identifierSpace.innerText = `Test identifier: ${testIdentifier}`;
    identifierSpace.id = "id";
    orderSpace.appendChild(identifierSpace);
    
    const solutionsObjects = document.getElementsByClassName('solution');
    titleSpace.addEventListener('dblclick', toggleSolutions);
    for (i=0;i<solutionsObjects.length;i++) {
        solutionsObjects[i].addEventListener('dblclick', toggleSolution)
    }
}


// Main Actions
createTest();