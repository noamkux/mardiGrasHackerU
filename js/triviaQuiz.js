const mardiGrasTrivia = [{
    question: "What does 'Mardi Gras' mean in French?",
    answers: ["Fat Tuesday", "Party Time", "Carnival Season", "King Cake"],
    correctAnswerIndex: 0
},
{
    question: "What are the traditional Mardi Gras colors?",
    answers: ["Red, White, and Blue", "Green, Purple, and Gold", "Black and Gold", "Pink and Green"],
    correctAnswerIndex: 1
},
{
    question: "What is a 'krewe' in Mardi Gras terminology?",
    answers: ["A type of cake", "A group of revelers", "A type of float", "A type of dance"],
    correctAnswerIndex: 1
},
{
    question: "What is a 'throw' in Mardi Gras terminology?",
    answers: ["A type of costume", "A type of music", "A type of dance", "An item thrown from a float"],
    correctAnswerIndex: 3
},
{
    question: "What is the name of the famous parade on Mardi Gras Day?",
    answers: ["The Zulu", "The Rex", "Bacchus", "Endymion"],
    correctAnswerIndex: 1
},
{
    question: "What is the name of the Mardi Gras Indian Big Chief who passed away in 2018?",
    answers: ["Tootie Montana", "Jolly", "Big Queen Tahj", "Monk Boudreaux"],
    correctAnswerIndex: 0
},
{
    question: "What is the name of the official Mardi Gras song?",
    answers: ["The Saints Go Marching", "Mardi Gras Mambo", "Second Line", "Iko Iko"],
    correctAnswerIndex: 1
},
{
    question: "What is the traditional dessert of Mardi Gras?",
    answers: ["King Cake", "Beignets", "Bananas Foster", "Bread Pudding"],
    correctAnswerIndex: 0
},
{
    question: "What is the name of the historic cemetery in New Orleans where Mardi Gras parades begin?",
    answers: ["St. Roch Cemetery", "Lafayette Cemetery No. 1", "Greenwood Cemetery", "Metairie Cemetery"],
    correctAnswerIndex: 1
},
{
    question: "What is the name of the French Quarter street famous for its Mardi Gras celebrations?",
    answers: ["Bourbon Street", "Royal Street", "Canal Street", "Magazine Street"],
    correctAnswerIndex: 0
}
];


let scoreMSg = ""

let progressBar = 0;

let quizCounter = 0

let isUserRight = false

var score = 0;

let radioButtons = document.getElementsByName("radio");


function nextQuiz() {

    if (quizCounter >= 9) {
        showImage();
        score = 0
        quizCounter = 0
        unmarkRadio()
        document.getElementById("progressBar").style.width = "0px";
    }
    else if (document.querySelector('input[type="radio"]:checked') === null) {
            return
        }


        else if (isUserRight == true) {
            score++
            progressBar += 10
            document.getElementById("progressBar").style.width = `${progressBar}%`


        }


    quizCounter++
    updateA()
    updateQ()
    unmarkRadio()





    isUserRight = false

}

function updateQ() {

    document.getElementById("question").innerText = (`Q ${quizCounter + 1}. ` + mardiGrasTrivia[quizCounter % 10].question)
}
function updateA() {
    for (let i = 0; i < 4; i++) {

        document.getElementById(`answer${i}`).innerText = mardiGrasTrivia[quizCounter % 10].answers[i]

    }
}
function unmarkRadio() {
    for (let i = 0; i < radioButtons.length; i++) {
        radioButtons[i].checked = false;
    }
}



function checkAnswer(answerIndex) {
    if (answerIndex === mardiGrasTrivia[quizCounter].correctAnswerIndex) {
        
        isUserRight = true
    } else {
        isUserRight = false;
    }
}
function initQuiz() {
    updateA()
    updateQ()
    progressBar = 0
}

function handleScoreMsg() {
    
    progressBar = 0

    if (score >= 1 && score <= 3) {
        return `<h2 class="text-center p-1 display-6">Great job on completing the Mardi Gras trivia quiz! While your score may be on the lower side, don't worry, there's always room for improvement. </h2>
          <p class="text-center">  Keep exploring and learning about this festive celebration, and you'll be a Mardi Gras expert in no time. </p>
            <p class="mb-0 text-center">  Don't forget to keep scrolling the website for more interesting content and fun quizzes!<br><p class="text-center">Click Here To Play Again</p></p>
            `

    }
    else if (score >= 4 && score <= 6) {
        return `<h2 class="text-center p-1 display-6">Congratulations on completing the Mardi Gras trivia quiz! You scored in the middle range, which means you have a decent understanding of this festive celebration.</h2>
        <p>Keep exploring and learning about the rich history and traditions of Mardi Gras, and you'll be ready to celebrate in no time. </p>
        <p class="mb-0">  Don't forget to keep scrolling the website for more interesting content and fun quizzes!<br>Click Here To Play Again</p>`

    }
    else if (score >= 7 && score <= 9) {
        return `<h2 class="text-center p-1  display-6">Excellent job on completing the Mardi Gras trivia quiz!</h2>
    <p>Your score shows that you have a great understanding of this festive celebration. Keep up the great work, and continue to explore the rich history and traditions of Mardi Gras. You're well on your way to becoming a Mardi Gras expert! </p>
      <p class="mb-0">  Don't forget to keep scrolling the website for more interesting content and fun quizzes!<br>Click Here To Play Again</p>`

    }
    else if (score == 10) return `<h2 class="text-center p-1  display-6">Wow, congratulations on acing the Mardi Gras trivia quiz!</h2>
     <p>You truly know your stuff when it comes to this festive celebration. Your score of 10 out of 10 is truly impressive! Keep up the great work and continue to explore the rich history and traditions of Mardi Gras. You're a Mardi Gras expert!</p>
     <p class="mb-0"> Don't forget to keep scrolling the website for more interesting content and fun quizzes!
     <br>Click Here To Play Again</p>`

}




function showImage() {
    setTimeout(() => {
        document.getElementById("lightbox").innerHTML = `
        <div class="container last-container w-75 mt-5">
    <div class="last-q-textbox" onclick="newQuiz()">
        <h1 class="text-center p-1">YOUR SCORE IS : ${score} </h1>` + handleScoreMsg()

    }, 1000);


    document.getElementById("lightbox").style.display = "flex";
}
function hideImage() {
    document.getElementById("lightbox").style.display = "none";
}
function hideLightbox() {
    document.getElementById("lightbox").style.display = "none";
}
hideLightbox();

initQuiz()

function newQuiz() {
    score = 0
    quizCounter = 0
    updateA()
    updateQ()
    unmarkRadio()
    document.getElementById("progressBar").style.width = "0px";
}

for (let i = 0; i < 4; i++) {

    document.getElementById(`answer${i}`).addEventListener("click", () => checkAnswer(i));

    document.getElementById(`span${i}`).addEventListener("click", () => checkAnswer(i));

}

nextQuiz()


