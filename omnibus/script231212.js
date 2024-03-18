//Define Links
const links = [
    {    "link": "bookreportdec.jpg",
        "label": "Dec. Book Report 1/4 and 1/10",
       "course": "7th-8th",
          "due": "2024-01-10"
},{
         "link": "aeneidxi.jpg",
        "label": "Why Try Essay 12/21",
       "course": "8th",
          "due": "2023-12-21"
},{
         "link": "magicianstest.jpg",
        "label": "Magician's Nephew Test 12/13",
       "course": "7th",
          "due": "2023-12-13"
},{
         "link": "aeneidviii.jpg",
        "label": "Essay on Hell 12/7",
       "course": "8th",
          "due": "2023-12-07"
    },{
         "link": "outline.jpg",
        "label": "Practice Outline 12/6",
       "course": "7th",
          "due": "2023-12-06"
    },{
         "link": "magiciansii.jpg",
        "label": "Essay on Curiosity 12/6",
       "course": "7th",
          "due": "2023-12-06"
    },{
         "link": "novreport.pdf",
        "label": "Nov. Book Report 12/6 and 12/7",
       "course": "7th-8th",
          "due": "2023-12-06"
    },{
         "link": "odysseyxx.jpg",
        "label": "Odyssey Final 11/29",
       "course": "7th",
          "due": "2023-11-29"
    },{
         "link": "aeneidV.jpg",
        "label": "Homework 11/21",
       "course": "8th",
          "due": "2023-11-21"
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
          "due": "2023-11-21"
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