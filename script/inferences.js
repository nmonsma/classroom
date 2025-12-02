// Variables
const uses = document.getElementsByTagName('use');

// Helper Functions

function processClick() {
    this.classList.add('flip');
    setTimeout(()=>{this.classList.remove('flip')},1200);
}

// Main Functions
for (i=0; i<uses.length; i++) {
    uses[i].addEventListener('click', processClick);
}