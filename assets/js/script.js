//Wait for the DOM to finish loading before running the game
//Get the button elements and add event listener to them

document.addEventListener("DOMContentLoaded", function(){
    let buttons = this.getElementsByTagName("button");
    
    for (let button of buttons) {
        button.addEventListener("click", function () {
            if(this.getAttribute("data-type") === "submit") {
                alert("You cliched Submit");
            } else {
                 let gameType = this.getAttribute("data-type");
                 alert(`You clicked ${gameType}` );
            }
        })
    }
})

function runGame() {

}

function checkAnswer(){

}

function calculateCrrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion() {

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}