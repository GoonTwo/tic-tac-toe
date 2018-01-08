var rl = require('readline');

class TicTacToe {
  constructor() {
    this.board = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    this.winnningMoves = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
    this.p1Board = [];
    this.p2Board = [];
    this.p1Move = true;

  }

  makeMove(spot) {
    if (this.p1Move) {
      this.board[spot] = 'X';
      this.p1Board.push(spot);
      this.p1Move = false;
    } else {
      this.board[spot] = 'O';
      this.p2Board.push(spot);
      this.p1Move = true;
    }
    this.drawBoard();
    this.checkForWinner();
  }

  drawBoard() {
    let boardImage = '';
    this.board.forEach((space, index) => {
      boardImage += `${space}|`
      if ((index + 1) % 3 === 0) boardImage += '\n';
    });
    console.log(boardImage);
    this.askForMove();
  }

  validateMove() {

  }

  checkForWinner() {
    console.log('P1 board: ', this.p1Board)
    console.log('P2 board: ', this.p2Board)
    if (this.isWinner(this.p1Board)) {
      console.log('P1 WINS!')
    } else if (this.isWinner(this.p2Board)) {
      console.log('P2 WINS!')
    }
  }

  isWinner(board) {
    return this.winnningMoves.some((winningMove) => {
      return winningMove.every((move) => {
        return board.indexOf(move) >= 0;
      })
    })
  }

  askForMove() {
    let r = rl.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    r.question('Where do you wanna go dude?' + '\n', (answer) => {
      r.close();
      this.makeMove(answer);
    });
  }
}



// ask('Where would you like to go?', function (answer) {
//   console.log(answer)
// });

const game = new TicTacToe();
game.askForMove()