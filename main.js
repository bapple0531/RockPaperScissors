const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
return userInput;
    } else {
        console.log('Error, invalid input!');
}
}

const getComputerChoice = () => {
   const randomNumber = Math.floor(Math.random() * 3);
   switch (randomNumber) {
       case 0:
           return 'rock';
           case 1:
               return 'paper';
            case 2:
                return 'scissors';
   }
};

const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return "It's a tie!";
    } 
if (userChoice === 'rock') {
    if (computerChoice === 'paper')
    return 'Computer is the winner!';
} else {
    return 'You are the winner!'
}
if (userChoice === 'paper') {
    if (computerChoice === 'scissors')
    return 'Computer is the winner!';
} else {
    return 'You are the winner!';
}
if (userChoice === 'scissors') {
    if (computerChoice === 'rock')
    return 'Computer is the winner!';
} else {
    return 'You are the winner!';
}
};

const playGame = () => {
    const userChoice = getUserChoice ('paper');
    const computerChoice = getComputerChoice(); 
    console.log(`You picked ${userChoice}`);
    console.log(`The computer picked ${computerChoice}`);
    console.log(determineWinner(userChoice, computerChoice)); 
};

playGame();
