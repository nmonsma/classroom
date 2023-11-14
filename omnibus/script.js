//Define Links
const links = [
    {
         "link": "novreport.pdf",
        "label": "Nov. Book Report",
       "course": "7th-8th",
          "due": "2023-12-07"
    },{
         "link": "aeneidIV.pdf",
        "label": "Homework 11/16",
       "course": "8th",
          "due": "2023-11-16"
    },{
        "link": "odysseyXVIII.pdf",
        "label": "Homework 11/15",
       "course": "7th",
          "due": "2023-11-15"
    },{
        "link": "odysseyXVII.pdf",
        "label": "Homework 11/8",
       "course": "7th",
          "due": "2023-11-10"
    }
]

//Populate main with links based on due date
function populate (referenceDate) {
    console.log(referenceDate)
    const main = document.getElementsByTagName('main')[0];
    for (let i = links.length - 1; i > -1; i--) {
        const dueDate = new Date(links[i].due);
        console.log(dueDate)
        if (dueDate>referenceDate) {
            const newLink = document.createElement('a');
            newLink.href = links[i].link;
            newLink.innerText = `${links[i].course}: ${links[i].label}`;
            newLink.classList.add('box');
            newLink.classList.add(`omni${links[i].course}`);
            console.log(links[i].label);
            main.appendChild(newLink);
        }
    }
}

//Create Reference Date 7 Days from Now
let aWeekOut =  new Date() - (1000*60*60*24*7);

//Run Population Function
populate (aWeekOut)