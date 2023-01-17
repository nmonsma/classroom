// Variables
const calcSpace = document.getElementById('calc-space');
const orderSpace = document.getElementById('order-space');


const key = {
    "calculations": [
        {"problem": "T \u2022 T", "solution": "T"},
        {"problem": "T \u2022 F", "solution":"F"},
        {"problem": "F \u2022 T", "solution":"F"},
        {"problem": "F \u2022 F", "solution":"F"},
        {"problem": "T \u2228 T", "solution":"T"},
        {"problem": "T \u2228 F", "solution":"T"},
        {"problem": "F \u2228 T", "solution":"T"},
        {"problem": "F \u2228 F", "solution":"F"},
        {"problem": "T \u2283 T", "solution":"T"},
        {"problem": "T \u2283 F", "solution":"F"},
        {"problem": "F \u2283 T", "solution":"T"},
        {"problem": "F \u2283 F", "solution":"T"},
        {"problem": "T \u2261 T", "solution":"T"},
        {"problem": "T \u2261 F", "solution":"F"},
        {"problem": "F \u2261 T", "solution":"F"},
        {"problem": "F \u2261 F", "solution":"T"}
    ],
    "resolutions": [
        {"problem": "? \u2022 ? = T", "solution": "T T"},
        {"problem": "? \u2022 ? = F", "solution": "? ?"},
        {"problem": "? \u2022 T = F", "solution": "F"},
        {"problem": "? \u2022 F = F", "solution": "?"},
        {"problem": "T \u2022 ? = F", "solution": "F"},
        {"problem": "F \u2022 ? = F", "solution": "?"},

        {"problem": "? \u2228 ? = F", "solution": "F F"},
        {"problem": "? \u2228 ? = T", "solution": "? ?"},
        {"problem": "T \u2228 ? = T", "solution": "?"},
        {"problem": "F \u2228 ? = T", "solution": "T"},
        {"problem": "F \u2228 ? = F", "solution": "F"},
        {"problem": "? \u2228 T = T", "solution": "?"},
        {"problem": "? \u2228 F = T", "solution": "T"},
        {"problem": "? \u2228 F = F", "solution": "F"},

        {"problem": "? \u2283 ? = F", "solution": "T F"},
        {"problem": "? \u2283 ? = T", "solution": "? ?"},
        {"problem": "T \u2283 ? = T", "solution": "T"},
        {"problem": "T \u2283 ? = F", "solution": "F"},
        {"problem": "F \u2283 ? = T", "solution": "?"},
        {"problem": "? \u2283 T = T", "solution": "?"},
        {"problem": "? \u2283 F = T", "solution": "F"},
        {"problem": "? \u2283 F = F", "solution": "T"},

        {"problem": "? \u2261 ? = T", "solution": "? ?"},
        {"problem": "? \u2261 ? = F", "solution": "? ?"},
        {"problem": "T \u2261 ? = T", "solution": "T"},
        {"problem": "T \u2261 ? = F", "solution": "F"},
        {"problem": "F \u2261 ? = T", "solution": "F"},
        {"problem": "F \u2261 ? = F", "solution": "T"},
        {"problem": "? \u2261 T = T", "solution": "T"},
        {"problem": "? \u2261 T = F", "solution": "F"},
        {"problem": "? \u2261 F = T", "solution": "F"},
        {"problem": "? \u2261 F = F", "solution": "T"}
    ],
    "order": [
        {"problem": "(p\u2283q)\u2261~r", "solution": [6,2,5]},
        {"problem": "~(p\u2261q)", "solution": [3,0]},
        {"problem": "~(p\u2228q)\u2283r", "solution": [3,0,6]},
        {"problem": "[p\u2228(q\u2283r)]\u2022~s", "solution": [10,5,2,9]},
        {"problem": "p\u2283~(q\u2228r)", "solution": [5,2,1]},
        {"problem": "(~p\u2022q)\u2228r", "solution": [1,3,6]}
    ]
}


// Helper Functions
function createCalculationQuestion() {
    const createdDiv = document.createElement('div');
    createdDiv.classList.add('question');
    createdDiv.classList.add('calculation');

    const questionNumber = Math.floor(Math.random()*key.calculations.length);
    
    const problemParagraph = document.createElement('p');
    const problemText = key.calculations[questionNumber].problem;
    problemParagraph.classList.add('problem');
    problemParagraph.innerText = `${problemText}`;
    
    const solutionParagraph = document.createElement('p');
    const solutionText = key.calculations[questionNumber].solution;
    solutionParagraph.classList.add('solution');
    solutionParagraph.classList.add('invisible');
    solutionParagraph.innerText = `${solutionText}`;

    createdDiv.appendChild(problemParagraph);
    createdDiv.appendChild(solutionParagraph);

    return createdDiv;
}

function createResolutionQuestion() {
    const createdDiv = document.createElement('div');
    createdDiv.classList.add('question');
    createdDiv.classList.add('resolution');

    const questionNumber = Math.floor(Math.random()*key.resolutions.length);
    
    const problemParagraph = document.createElement('p');
    const problemText = key.resolutions[questionNumber].problem;
    problemParagraph.classList.add('problem');
    problemParagraph.innerText = `${problemText}`;
    
    const solutionParagraph = document.createElement('p');
    const solutionText = key.resolutions[questionNumber].solution;
    solutionParagraph.classList.add('solution');
    solutionParagraph.classList.add('invisible');
    solutionParagraph.innerText = `${solutionText}`;

    createdDiv.appendChild(problemParagraph);
    createdDiv.appendChild(solutionParagraph);

    return createdDiv;
}

function createOrderQuestion() {
    const createdDiv = document.createElement('div');
    createdDiv.classList.add('order-question');
    createdDiv.classList.add('order');

    const questionNumber = Math.floor(Math.random()*key.order.length);
    const stepNumber = Math.floor(Math.random()*(key.order[questionNumber].solution.length));
    
    const problemParagraph = document.createElement('p');
    const problemText = key.order[questionNumber].problem;
    problemParagraph.classList.add('order-problem');
    problemParagraph.innerHTML = `${problemText}<br>If assigning truth values to the propositions is step 0, what is step ${stepNumber+1}?`;
    
    const solutionParagraph = document.createElement('p');
    const solutionText = key.order[questionNumber].problem.charAt(key.order[questionNumber].solution[stepNumber]);
    solutionParagraph.classList.add('solution');
    solutionParagraph.classList.add('invisible');
    solutionParagraph.innerText = `${solutionText}`;

    createdDiv.appendChild(problemParagraph);
    createdDiv.appendChild(solutionParagraph);

    return createdDiv;
}

// Main Functions

function toggleSolutions() {
    for (i=0;i<solutionsObjects.length;i++) {
        solutionsObjects[i].classList.toggle('invisible');
    }
 }

function toggleSolution () {
    this.classList.toggle('invisible');
}

// Main Actions
for (i=0;i<7;i++) {
    const childElement = createCalculationQuestion();
    calcSpace.appendChild(childElement);
}
for (i=0;i<13;i++) {
    const childElement = createResolutionQuestion();
    calcSpace.appendChild(childElement);
}
const titleSpace = document.createElement('p');
titleSpace.innerHTML = `Name: ________________<br><br>Date: __________`;
orderSpace.appendChild(titleSpace);
for (i=0;i<5;i++) {
    const childElement = createOrderQuestion();
    orderSpace.appendChild(childElement);
}

const solutionsObjects = document.getElementsByClassName('solution');
titleSpace.addEventListener('dblclick', toggleSolutions);
for (i=0;i<solutionsObjects.length;i++) {
    solutionsObjects[i].addEventListener('dblclick', toggleSolution)
}