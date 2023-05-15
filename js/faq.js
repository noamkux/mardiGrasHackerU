


let default1 = document.getElementById("faqUp").style.position
let default2 = document.getElementById("faqUp").style.top
let default3 = document.getElementById("faqUp").style.height
let default4 = document.getElementById("faqDown").style.height
let default5 = document.getElementById("faqDown").style.top


function revertMoveBoxes(){
    document.getElementById("faqUp").style.position = default1
    document.getElementById("faqUp").style.top = default2
    document.getElementById("faqUp").style.height= default3
    document.getElementById("faqDown").style.height = default4
    document.getElementById("faqDown").style.top = default5
    
}


function moveBoxes(){

    document.getElementById("faqUp").style.position = "relative";
    document.getElementById("faqUp").style.top = "100px";
    document.getElementById("faqUp").style.height= "800px"
    document.getElementById("faqDown").style.height = "10px"
    document.getElementById("faqDown").style.top = "100px";
}


