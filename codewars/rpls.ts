/*
In this kata, your task is to implement an extended version of the famous rock-paper-scissors game. The rules are as follows:


- Scissors cuts Paper
- Paper covers Rock
- Rock crushes Lizard
- Lizard poisons Spock
- Spock smashes Scissors
- Scissors decapitates Lizard
- Lizard eats Paper
- Paper disproves Spock
- Spock vaporizes Rock
- Rock crushes Scissors

Task:
Given two values from the above game, return the Player result as "Player 1 Won!", "Player 2 Won!", or "Draw!".

Inputs
Values will be given as one of "rock", "paper", "scissors", "lizard", "spock".
*/

//  Challenge -> Hash Map
function rpsls(player1: string, player2: string) {
  if (player1 === player2) {
    return "Draw!";
  }

  const rules = {
    rock: ["scissors", "lizard"],
    paper: ["rock", "spock"],
    scissors: ["paper", "lizard"],
    lizard: ["paper", "spock"],
    spock: ["scissors", "rock"],
  };

  if (rules[player1].includes(player2)) {
    return "Player 1 Won!";
  } else {
    return "Player 2 Won!";
  }
}

console.log(rpsls("rock", "paper"));
