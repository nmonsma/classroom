// Variables
let activeStatement = {
    "affirmative": true,
    "universal": true,
    "invalid": false,
    "s": {
        "term": "",
        "complement": false
    },
    "p": {
        "term": "",
        "complement": false
    }
};
const consoleBox = document.getElementById('console');

// Helper Functions
function Term(term,complement) {
    this.term=term;
    this.complement=complement;
}

function Statement(affirmative,universal,sTerm,sComplement,pTerm,pComplement) {
    this.affirmative=affirmative;
    this.universal=universal;
    this.invalid=false;
    this.s = new Term(sTerm,sComplement);
    this.p = new Term(pTerm,pComplement);
}



function statementType(statement) {
    if (statement.universal) {
        if (statement.affirmative) {return "A"} else {return "E"};
    } else {
        if (statement.affirmative) {return "I"} else {return "O"};
    }
}

function naturalLanguage(statement) {
    let word = ['','','','',''];
    if (statement.invalid==true) {word[0]='\u25bc'}
    if (statement.universal) {
        if (statement.affirmative) {word[1] = "All"} else {word[1] = "No"}
    } else {
        word[1] = "Some";
        if (statement.affirmative) {word[3] = ""} else {word[3] = " not"};
    };
    if (statement.s.complement) {word[2] = `non-${statement.s.term}`} else {word[2] = statement.s.term};
    if (statement.p.complement) {word[4] = `non-${statement.p.term}`} else {word[4] = statement.p.term};
    return `${word[0]}${word[1]} ${word[2]} are${word[3]} ${word[4]}.`;
}

function converse(statement){
    const type = statementType(statement);
    const newStatement = new Statement(
        statement.affirmative,
        statement.universal,
        `${statement.p.term}`,
        statement.p.complement,
        `${statement.s.term}`,
        statement.s.complement,)
    if (type=="E"||type=="I") {newStatement.invalid=false} else {newStatement.invalid=true}; 
    return newStatement;
}    


function obverse(statement){
    statement.affirmative = !statement.affirmative;
    statement.p.complement = !statement.p.complement;
    return statement;
}

function contrapositive(statement){
    statement = obverse(statement);
    statement = converse(statement);
    statement = obverse(statement);
    const type = statementType(statement);
    // if (type=="A"||type=="O") {}
    return statement;   
}

// Main Functions
const currentStatement = new Statement(true,true,'',false,'',false);
function createStatement (){
    const type = document.getElementById('statement-creator').elements['word1'].value;
    let affirmative = true;
    let universal = true;
    if (type=='E'||type=='O') {affirmative=false};
    if (type=='I'||type=='O') {universal=false};
    const subject = document.getElementById('term1').value;
    const predicate = document.getElementById('term2').value;
    activeStatement = new Statement(affirmative,universal,subject,false,predicate,false);
    consoleBox.value+=naturalLanguage(activeStatement)+'\n';
}

function createConverse () {
    activeStatement = converse(activeStatement); 
    consoleBox.value+=naturalLanguage(activeStatement)+'\n';
}
function createObverse () {
    activeStatement = obverse(activeStatement); 
    consoleBox.value+=naturalLanguage(activeStatement)+'\n';
}
function createContrapositive () {
    activeStatement = contrapositive(activeStatement); 
    consoleBox.value+=naturalLanguage(activeStatement)+'\n';
}

document.getElementById('create-statement').addEventListener('click', createStatement);
document.getElementById('converse').addEventListener('click', createConverse);
document.getElementById('obverse').addEventListener('click', createObverse);
document.getElementById('contrapositive').addEventListener('click', createContrapositive);
document.getElementById('clear').addEventListener('click',()=>{consoleBox.value=''})
