// Global Variables
const elements = document.getElementsByClassName('element')

// Main Functions
function elementSwitch () {
    if (document.getElementById('peek').classList.contains('checked')) {
        for (let i=0; i < elements.length; i++) {
            let r = Math.random() * 7;
            console.log(r)
            if (r>2) {
                elements[i].classList.add('hidden');
            } else {
                elements[i].classList.remove('hidden');
            }       
        }
    }
}

function toggleDisappearance () {
    document.getElementById('peek').classList.toggle('checked');
    if (!document.getElementById('peek').classList.contains('checked')) {
        for (let i=0; i < elements.length; i++) {
            elements[i].classList.remove('hidden');       
        }
    }    
}

// Main Actions
document.getElementById('main-image').addEventListener('click', elementSwitch);
document.getElementById('peek').addEventListener('click', toggleDisappearance);
setInterval(elementSwitch, 10000);