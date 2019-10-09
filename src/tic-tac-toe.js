class TicTacToe {
    constructor() {
        this.currentPlayer = 'x';
        this.winner = null;
        this.gameField = [];
        for (let i = 0; i < 3; i++) {
            this.gameField.push(new Array(3));
        }

    }

    getCurrentPlayerSymbol() {
        return this.currentPlayer;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.gameField[rowIndex][columnIndex] == undefined) {
            this.gameField[rowIndex][columnIndex] = this.currentPlayer;
            
            //Check for winner line
            let cLine = true, rLine = true, d1Line = true, d2Line = true;
            for (let i = 0; i < 3 && (cLine || rLine || d1Line || d2Line); i++) {
                if (this.gameField[i][columnIndex] != this.currentPlayer && cLine) cLine = false;
                if (this.gameField[rowIndex][i] != this.currentPlayer && rLine) rLine = false;
                if (this.gameField[i][i] != this.currentPlayer && d1Line) d1Line = false;
                if (this.gameField[2-i][i] != this.currentPlayer && d2Line) d2Line = false;
            }
            if (cLine || rLine || d1Line || d2Line) {
                this.winner = this.currentPlayer;
            } 
            this.currentPlayer = (this.currentPlayer == 'x' ? 'o' : 'x');
            
        }

    }

    isFinished() {
        return this.noMoreTurns() || !!this.getWinner();
    }

    getWinner() {
        return this.winner;
    }

    noMoreTurns() {
        let noTurn = true;
        let row = 0
        while (row < 3 && noTurn) {
            let col = 0;
            while (col < 3 && noTurn) {
                if (!this.gameField[row][col]) {
                    noTurn = false;
                }
                col++;
            }
            row++;
        }
        return noTurn;
    }

    isDraw() {
        return this.isFinished() && !this.getWinner();
    }

    getFieldValue(rowIndex, colIndex) {
        let value = this.gameField[rowIndex][colIndex];
        return value ? value : null;
    }
}

module.exports = TicTacToe;
