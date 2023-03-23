// Variables
const terms = document.getElementsByClassName('term')
const figure1 = document.getElementsByClassName('figure-1');
const figure2 = document.getElementsByClassName('figure-2');
const figure3 = document.getElementsByClassName('figure-3');
const figure4 = document.getElementsByClassName('figure-4');
const figureSet = [figure1, figure2, figure3, figure4];
const majors = document.getElementsByClassName('major');
const minors = document.getElementsByClassName('minor');

let statement1 = {
    "affirmative": true,
    "universal": true,
    "s": {
        "term": "",
        "complement": false,
    },
    "p": {
        "term": "",
        "complement": false,
    }
};

// Helper Functions
function statementType(statement) {
    if (statement.universal) {
        if (statement.affirmative) {return "A"} else {return "E"};
    } else {
        if (statement.affirmative) {return "I"} else {return "O"};
    }
}

function naturalLanguage(statement) {
    let word = ['','','',''];
    if (statement.universal) {
        if (statement.affirmative) {word[1] = "All"} else {word[1] = "No"}
    } else {
        word[1] = "Some";
        if (statement.affirmative) {word[3] = ""} else {word[3] = " not"};
    };
    if (statement.s.complement) {word[2] = `non-${statement.s.term}`} else {word[2] = statement.s.term};
    if (statement.p.complement) {word[4] = `non-${statement.p.term}`} else {word[4] = statement.p.term};
    return `${word[1]} ${word[2]} are${word[3]} ${word[4]}.`;
}

function converse(statement){
    if (statementType(statement)=="E"||statementType(statement=="I")) {
        let statementTransformed = statement;
        statementTransformed.s = statement.p;
        statementTransformed.p = statement.s;
        console.log (naturalLanguage(statementTransformed));
        return statementTransformed;
    }    
}

function obverse(statement){
    statement.affirmative = !statement.affirmative;
    statement.p.complement = !statement.p.complement;
    console.log (naturalLanguage(statement));
    return statement;
}

function contrapositive(statement){
    if (statementType(statement)=="A"||statementType(statement=="O")) {
        statement = obverse(statement);
        statement = converse(statement);
        statement = obverse(statement);
        console.log (naturalLanguage(statement));
        return statement;
    }    
}

function highlightTerms(figure) {
    colorMajorMinor();
    if (figure==0) {for (i=0; i<terms.length; i++) {terms[i].classList.remove('highlight')}}
    else {for (i=0; i<figureSet[figure-1].length; i++) {figureSet[figure-1][i].classList.add('highlight')}}   
}

function colorMajorMinor() {
    for (i=0; i<majors.length; i++) {majors[i].classList.toggle('red')};
    for (i=0; i<minors.length; i++) {minors[i].classList.toggle('blue')};
}

// Main Functions
document.addEventListener('keydown', (e)=> {
    const keyName = e.key;
    console.log(keyName);
    if (figure>-1&&figure<5) {highlightTerms(keyName)};
});
