


let default1 = document.getElementById("faqUp").style.position
let default2 = document.getElementById("faqUp").style.top
let default3 = document.getElementById("faqUp").style.height
let default4 = document.getElementById("faqDown").style.height
let default5 = document.getElementById("faqDown").style.top

let counter = 0

let centers = [
    `<h3>New Orleans Visitor Center</h3>
    <p class="faq-text">Address: 529 St Ann St, New Orleans, LA 70116</p>
    <p class="faq-text">Directions: Located in the heart of the French Quarter, just two blocks
        from Jackson Square.</p>`, `<h3>Louis Armstrong Airport Visitor Center</h3>
        <p class="faq-text">Address: 900 Airline Drive, Kenner, LA 70062</p>
        <p class="faq-text">Directions: Located on the lower level of the airport terminal, near
            baggage claim.</p>`, `<h3>New Orleans Jazz Museum</h3>
            <p class="faq-text">Address: 400 Esplanade Ave, New Orleans, LA 70116</p>
            <p class="faq-text">Directions: Located in the French Quarter, across from the French
                Market.</p>`, `<h3>New Orleans Plantation Country Visitor Center</h3>
                <p class="faq-text">Address: 671 A Charles Street, LaPlace, LA 70068</p>
                <p class="faq-text">Directions: Located just off I-10, between Baton Rouge and New Orleans.
                </p>`, ` <h3>New Orleans East Visitor Information Center</h3>
                <p class="faq-text">Address: 5825 Read Blvd, New Orleans, LA 70127</p>
                <p class="faq-text">Directions: Located in the New Orleans East Regional Library, just off
                    I-10.</p>`
]


function revertMoveBoxes() {
    document.getElementById("faqUp").style.position = default1
    document.getElementById("faqUp").style.top = default2
    document.getElementById("faqUp").style.height = default3
    document.getElementById("faqDown").style.height = default4
    document.getElementById("faqDown").style.top = default5

}


function moveBoxes() {

    document.getElementById("faqUp").style.position = "relative";
    document.getElementById("faqUp").style.top = "50px";
    document.getElementById("faqUp").style.height = "800px"
    document.getElementById("faqDown").style.height = "1px"
    document.getElementById("faqDown").style.top = "10px";
}

function nextFaq() {
    counter++
    counter % centers.length
document.getElementById("cell1").innerHTML = centers[(0 + counter) % centers.length]

document.getElementById("cell2").innerHTML = centers[(1 + counter) % centers.length]
}

function backFaq() {
    counter--
    
    counter % centers.length
document.getElementById("cell1").innerHTML = centers[(0 + counter) % centers.length]

document.getElementById("cell2").innerHTML = centers[(1 + counter) % centers.length]

}
