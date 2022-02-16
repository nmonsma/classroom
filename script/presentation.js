// Global Variables
let imageList = ['', 'img/Europe.png', 'img/WWI.png']
let imageIndex = 0

// Main Functions
function advanceImage () {
    imageIndex++;
    console.log(`${imageList[imageIndex]}`);
    document.getElementById('body').style.backgroundImage=`${imageList[imageIndex]}`;
}

function reverseImage () {
    imageIndex--;
    console.log(`${imageList[imageIndex]}`);
    document.getElementById('body').style.backgroundImage=`${imageList[imageIndex]}`;
}

// Main Actions
document.addEventListener('keydown', (e)=> {
    const keyName = e.key;
    console.log(keyName);
    if (keyName==="1") advanceImage();
    if (keyName==="0") reverseImage();
})