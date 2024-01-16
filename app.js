let userScore = 0;
let comScore = 0;

const choices = document.querySelectorAll(".choise");
const msgPaper = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const genCompChoice=()=>{
    const options = ["rock","paper","scissor"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame = () =>{
    msgPaper.innerText ="Game was draw! Play again";
    msgPaper.style.backgroundColor = "#081b31";
}

const showUserWin = (userWin, usrchoice, compchoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msgPaper.innerText =`You win! ${usrchoice} beats ${compchoice}`;
        msgPaper.style.backgroundColor = "green";
    }else{
        comScore++;
        compScorePara.innerText = comScore;
        msgPaper.innerText = `Computer win! ${compchoice} beats ${usrchoice}`;
        msgPaper.style.backgroundColor = "red";
    }
}

const playGame = (userChoice)=>{
    //Genarate computer choise -> modular
    const compChoise = genCompChoice();
    if (userChoice === compChoise) {
        drawGame();
    }else{
        let userWin = true;
        if (userChoice === "rock") {
            //scissor, paper
            userWin = compChoise === "paper" ? false : true;
        }else if(userChoice === "paper"){
            //rock, scissor
            userWin = compChoise === "scissor" ? false : true;
        }else{
            //rock, paper
            userWin = compChoise === "rock" ? false : true;
        }
        showUserWin(userWin, userChoice, compChoise) ;
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
      const userChoice = choice.getAttribute("id");
      playGame(userChoice);
    });
  });