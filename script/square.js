// Global Variables
const elements = document.getElementsByClassName('element')
const groups = document.getElementsByClassName('group');

// Main Functions
function elementSwitch () {
    if (document.getElementById('peek').classList.contains('checked')) {
        console.log('randomly hiding');
        for (let i=0; i < elements.length; i++) {
            let r = Math.random() * 10;
            console.log(r);
            if (r>1.6) {
                elements[i].classList.add('hidden');
            } else {
                elements[i].classList.remove('hidden');
            }       
        }
    }
}

function toggleDisappearance () {
    document.getElementById('peek').classList.toggle('checked');
    console.log('toggling button')
    if (document.getElementById('peek').classList.contains('checked')) {
        elementSwitch();
    } else {
        for (let i=0; i < elements.length; i++) {
            elements[i].classList.remove('hidden');       
        }
        console.log('revealing all');
    }   
}

function toggleSingleElement () {
    console.log(`toggling ${this.id}`);
    this.classList.toggle('hidden');
}

// Main Actions
document.getElementById('main-image').addEventListener('click', elementSwitch);
document.getElementById('peek').addEventListener('click', toggleDisappearance);
for (group of groups) {
    group.addEventListener('click', toggleSingleElement);
}
setInterval(elementSwitch, 240000);