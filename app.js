let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const reset = document.querySelector("#resetBtn");


const generateCompChoice = () => {
    const option = ["rock", "paper", "scissors"];
    let index = Math.floor(Math.random() * 3);
    return option[index];

}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        msg.innerText = `You Win!  , Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        userScore++;
        userScorePara.innerText = userScore;
    } else {
        msg.innerText = `You Lose , ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
        compScore++;
        compScorePara.innerText = compScore;
    }
}

const draw = () => {
    msg.innerText = "Game was Draw , Play Again!";
    msg.style.backgroundColor = "#081b31";
}


const playGame = (userChoice) => {
    let compChoice = generateCompChoice();
    if (userChoice === compChoice) {
        draw();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }

}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})



const resetBtn = () => {
    userScore = 0;
    compScore = 0;
    msg.innerText = "play your game";
    msg.style.backgroundColor = "#081b31";
    compScorePara.innerText = compScore;
    userScorePara.innerText = userScore;

}
reset.addEventListener("click", resetBtn);
