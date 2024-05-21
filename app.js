let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#Comp-score");
const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const id = Math.floor(Math.random() * 3);
    return options[id];
};

const drawGame = () => {
    msg.innerText = "Game is Draw";
    msg.style.backgroundColor = "#06AED5" ;
}

const playGame = (userChoice) => {
    const compChoice = genCompChoice(); // computer choice

 if (userChoice === compChoice){
    drawGame();
 } else {
    let userWin = true
    if(userChoice===rock){
        //scissors , paper
        userWin = compChoice === "scissors" ? true : false;
    }
    else if(userChoice==="scissors"){ //rock , paper
        userWin = compChoice === "paper" ? true : false;
    }
    else  {
        userWin = compChoice === "rock" ? true : false;
    }
    showWinner (userWin, userChoice, compChoice);
 }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
      const userChoice = choice.getAttribute("id");
      playGame(userChoice);
    });
    });

    const showWinner = (userWin ,userChoice, compChoice) => {
        if (userWin){
            userScore++ ;
            userScorePara.innerText = userScore ;
            msg.innerText = `You Win! , Your ${userChoice} beats the ${compChoice}`;
            msg.style.backgroundColor = "green";
        } else {
            compScore++ ;
            compScorePara.innerText = compScore ;
            msg.innerText = `You Lose , ${compChoice} beats your ${userChoice}`;
            msg.style.backgroundColor = "red";
        }
    }