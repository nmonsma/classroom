// Global Variables
let imageList = ['', 'Europe.png', 'WWI.png', 'Eastern Europe.png', 'Italy.png']
let imageIndex = 0

// Main Functions
function advanceImage () {
    imageIndex++;
    console.log(`${imageList[imageIndex]}`);
    document.getElementsByTagName('body')[0].style.backgroundImage=`url("img/${imageList[imageIndex]}")`;
}

function reverseImage () {
    imageIndex--;
    console.log(`${imageList[imageIndex]}`);
    document.getElementsByTagName('body')[0].style.backgroundImage=`url("img/${imageList[imageIndex]}")`;
}

// Main Actions
document.addEventListener('keydown', (e)=> {
    const keyName = e.key;
    console.log(keyName);
    if (keyName==="1") advanceImage();
    if (keyName==="0") reverseImage();
})