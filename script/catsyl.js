// Variables
const calcSpace = document.getElementById('calc-space');
const orderSpace = document.getElementById('order-space');


// Helper Functions
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
    const solutionsObjects = document.getElementsByClassName('solution');
    for (i=0;i<solutionsObjects.length;i++) {
        solutionsObjects[i].classList.toggle('invisible');
    }
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
for (i=0;i<6;i++) {
    const childElement = createOrderQuestion();
    orderSpace.appendChild(childElement);
}

document.addEventListener('click', toggleSolutions);
