// Global Variables
let scores = [];
let answerDisplayed = '';
let valueDisplayed = 0;
let shiftDepressed = false;
const items = document.getElementsByClassName('item');
const scoresElements = document.getElementsByClassName('scores');
const answers = {
"quiz22": {
    "a-e": "Definitions",
    "a": "The person whose friends God said \"have not spoken what is right\"",
    "b": "The statement that an argument seems to prove",
    "c": "The statements that lead you to the conclusion",
    "d": "A set of statements in which one of them seems to be implied by the others",
    "e": "The process of adding to your knowledge by working only with the knowledge you already have",
    
    "f-j": "Indicator\nWords",
    "f": "\"Therefore\" indicates this kind of statement.",
    "g": "\"Since\" indicates this kind of statement.",
    "h": "\"Because\" indicates this kind of statement.",
    "i": "\"So\" indicates this kind of statement.",
    "j": "\"For\" indicates this kind of statement.",
    
    "k-o": "Fallacies\nof Form",
    "k": "A distraction",
    "l": "The truth of one of the statements undermines the argument.",
    "m": "The arguer leaves out important information.",
    "n": "A poor presentation of someone else's argument so that it is easy to attack.",
    "o": "A poor comparison to something.",
    
    "p-t": "Fallacy\nExamples",
    "p": "The weather forecast says next week will be snowy, but I don't believe it because it's been snowing since December, and I hate snow.",
    "q": "Life is like a box of chocolates. Therefore, it is overpriced and poor quality.",
    "r": "Mr. Monsma taught Omnibus 2, so we will have him for Omnibus next year.",
    "s": "Only statements in Latin can clearly declare the truth.",
    "t": "School uniforms require every student to wear the same uncomfortable clothes, so having a uniform would be distracting during the school day, and we shouldn't do it.",
    
    "u-y": "Good\nArguments",
    "u": "An argument that works when the premises are true is a ... argument.",
    "v": "valid + true = ...",
    "w": "The two ways to claim an argument is unsound are\n(1) to attack the validity of the argument and\n(2) to attack the... of the premises.",
    "x": "If an argument's conclusion doesn't follow from its premises, then that argument is not ...",
    "y": "None of a sound argument's premises cannot be...",

    "z": "True or False: A valid argument can't have a false conclusion."
},

"catsyllogisms": {
    "a-e": "Definitions",
    "a": "It's made up of premises and a conclusion.",
    "b": "It's the term in a categorical syllogism that is found only in the premises and not in the conclusion.",
    "c": "It's the term in a categorical syllogism that's in the subject of the conclusion.",
    "d": "An argument in which it is impossible for the premises to be true while the conclusion is false.",
    "e": "A deductive argument with two premises and three terms.",
    
    "f-j": "Indicator\nWords",
    "f": "\"Therefore\" indicates this kind of statement.",
    "g": "\"Since\" indicates this kind of statement.",
    "h": "\"Because\" indicates this kind of statement.",
    "i": "\"So\" indicates this kind of statement.",
    "j": "\"For\" indicates this kind of statement.",
    
    "k-o": "Majors\nand Minors",
    "k": "MAJOR: No dragons are pets. Some dogs are pets. Therefore, some dogs are not dragons.",
    "l": "MIDDLE: All crooks are cowards. No crooks are heroes. Therefore, no heroes are cowards.",
    "m": "MAJOR: No disco is rap, but all disco is music. Thus, some music is not rap.",
    "n": "MINOR: Some complains are gripes, because all whines are complaints, and all whines are gripes.",
    "o": "MIDDLE: Since all rock climers are risk takers, some rock climbers are safe people, becuase some risk takers are safe people.",
    
    "p-t": "Conclusions",
    "p": "All fables are fictions, but no news articles are fables. Consequently, no fictions are news articles.",
    "q": "Some madmen are quiet peopel, and no madmen are poets. It follows that some quiet peopel are not poets.",
    "r": "No neighbors are aliens, becuase no neighbors are foreigners, and all foreigners are aliens.",
    "s": "All progressives are Democrats, so some liberals are not progressives, because some liberals are not democrats.",
    "t": "Some warm-blooded creatures are not mammals, since no bird is a mammal, but some warm-blooded creatures are birds.",
    
    "u-y": "Forms\nand Figures",
    "u": "No P is M.\nSome S is not M.\nSome S is not P.",
    "v": "All P is M.\nSome M is S.\nSome S is not P.",
    "w": "DAILY DOUBLE!\n\n\n(4.A.11)",
    "x": "All P is M.\nNo S is M.\nSome S is not P.",
    "y": "Some M is not P.\nAll M is S.\nSome S is not P."
  },

  "heidelberg": {
    "a-e": "Heidelberg\nHistory",
    "a": "The catechism was written in this city.",
    "b": "The catechism was written for this reason.",
    "c": "The catechism was risky to write because it did this.",
    "d": "The catechism was written by these two people.",
    "e": "The catechism was written in this year.",
    
    "f-j": "Heidelberg\nStructure",
    "f": "This is the format of each of the 129 items in the catechism.",
    "g": "These are the names of the three parts of the catechism?",
    "h": "The catechism is divided into 52 of these.",
    "i": "This is the purpose of the second question and answer.",
    "j": "The catechism is identified with this theological tradition.",
    
    "k-o": "Sin",
    "k": "This is where our sinful human nature comes from.",
    "l": "The catechism teaches that, apart from being born again, we are totally unable to do this.",
    "m": "This is the name the catechism gives to the section on sin.",
    "n": "Sinners go to hell for this reason, even though God is merciful.",
    "o": "These questions and answers are devoted to explaining sin and its consequences.",
    
    "p-t": "Salvation",
    "p": "Those who seek salvation and security in someone other than this man do not actually believe in him.",
    "q": "There are this number of sacraments.",
    "r": "The catechism teaches that this should be done to the children of believers.",
    "s": "The catechism explains what is taught in the gospel by going through this ancient statement of belief.",
    "t": "The catechism logically explains that our savior and mediator has to be these two things.",
    
    "u-y": "Service",
    "u": "This is the reason we are unable to do good works by our own will.",
    "v": "This is the chief reason believers do good works.",
    "w": "Believers do good works so that this will happen to their neighbors.",
    "x": "According to the catechism, this is the most important part of our service to God.",
    "y": "The catechism's explanation of the 6th commandment says that this is the best way to treat others.",

    "z": "The law is used to show believers these things, according to the catechism."
  },

  "syllogisms": {
    "a-e": "Parts",
    "a": "This is the statement that is implied by the premises.",
    "b": "The word \"since\" indicates this kind of statement.",
    "c": "This is the term shared by the premises.",
    "d": "This is the subject of the conclusion.",
    "e": "A categorical syllogism has this many different terms.",
    
    "f-j": "Good\nArguments",
    "f": "An argument that works when the premises are true is a ... argument.",
    "g": "An argument that is valid and has true premises is a ... argument.",
    "h": "If an argument is sound, you must do this with the conclusion.",
    "i": "If you disagree with the conclusion of an argument, you can attack it in these two ways.",
    "j": "If you disagree with the conclusion of a valid argument, you can attack it in this way.",
    
    "k-o": "Aristotle's\nRules",
    "k": "The middle term must be... at least once.",
    "l": "If one premise is negative and the other is affirmative, the conclusion must be...",
    "m": "A middle that is not distributed in either premise is called this.",
    "n": "If the major term is distributed in the..., it must be distributed in the...",
    "o": "A term that is distributed in the conclusion but not in the premises is called this.",
    
    "p-t": "Counterexamples",
    "p": "A counterexample has... premises and a... conclusion.",
    "q": "A counterexample proves that the entire... is invalid (and every argument that belongs to it).",
    "r": "When trying to create a counterexample, it helps to start by writing a... conclusion.",
    "s": "To make the premises true, may you use a different middle term in each premise?",
    "t": "If you can't seem to create a counterexample, that means this.",
    
    "u-y": "Other\nSyllogisms",
    "u": "An argument made up of multiple syllogisms is only valid if each syllogism is...",
    "v": "If an argument is missing a premise, you should try to figure out what the missing premise is for this reason.",
    "w": "If a premise is missing in an argument, and that missing premise is false, that means the argument is...",
    "x": "A syllogism that is missing one of the statements is called an ...",
    "y": "A chain of syllogisms is called a ...",

    "z": "When someone else makes an argument that you want to challenge, you should start by focusing on perception, clarifying the... of the terms."
  }
}

const questionSets = Object.keys(answers);

function populateAnswerSetSelector() {
    let selector = document.getElementById('answer-set');
    for (let i=0; i<questionSets.length; i++) {
        let option = document.createElement('option');
        option.value = questionSets[i];
        option.innerText = questionSets[i];
        selector.appendChild(option);
    }
}

function loadQuestions() {
    let questionSet = answers[document.getElementById('answer-set').value];
    document.getElementById('answer-set').disabled = true;
    let titles = document.getElementsByClassName('title');
    for (let i=0;i<titles.length;i++) {
        titles[i].innerText = questionSet[titles[i].id];
    }
    let prompts = document.getElementsByClassName('prompt');
    for (let i=0;i<prompts.length;i++) {
        prompts[i].innerText = questionSet[prompts[i].id.substr(9,10)];
    }

}


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

populateAnswerSetSelector();

document.getElementById('answer-set').addEventListener('change', loadQuestions);

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


