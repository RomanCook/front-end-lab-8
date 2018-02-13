const initRange = 5;
const initMaxPrize = 10;

let range = initRange;
let maxPrize = initMaxPrize;
let totalPrize = 0;
let quitGame = false;

if (confirm('Do You want to play a game?')){
  while (!quitGame){
    let attemptsLeft = 3;
    let currentPrize = maxPrize;
    const randomNumber = Math.floor(Math.random() * (range + 1));
    while (attemptsLeft > 0){
      let attempt = prompt('Enter a number from 0 to ' + range + '\r\nAttempts left: ' + attemptsLeft +
        '\r\nTotal prize: ' + totalPrize + '$\r\nPossible prize on current attempt: ' + currentPrize + '$', 0);
      quitGame = (attempt === null);
      if (!quitGame){
        attempt = parseInt(attempt);
        if (attempt === randomNumber){
          totalPrize += currentPrize;
          range *= 2;
          maxPrize *= 3;
          if (!confirm('Congratulations! You\'ve guessed the number!\r\nDo you want to continue the game?')) {
            console.log('Thank you for a game. Your prize is: ' + totalPrize + '$');
            quitGame = true;
          }
          break;
        } else{
          currentPrize = Math.floor(currentPrize/2);
          attemptsLeft -= 1;
          if (attemptsLeft <= 0){
            console.log('Thank you for a game. Your prize is: ' + totalPrize + '$');
            range = initRange;
            maxPrize = initMaxPrize;
            totalPrize = 0;
            quitGame = !confirm('Do you want to play again?');
          }
        }
      }
      if (quitGame){
        break;
      }
    }
  }
} else{
  console.log('You did not become a millionaire');
}