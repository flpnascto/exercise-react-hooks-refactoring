import React, { useContext } from 'react';
import AppContext from './context/AppContext';
import GameBoard from './GameBoard';

function victoryArchivedInLine(gameBoard) {
  for (let i = 0; i <= 6; i += 3) {
    if (
      gameBoard[i] === gameBoard[i + 1]
      && gameBoard[i + 1] === gameBoard[i + 2]
      && gameBoard[i] !== 0
    ) return gameBoard[i];
  }
  return false;
}

function victoryArchivedInColumn(gameBoard) {
  for (let i = 0; i <= 2; i += 1) {
    if (
      gameBoard[i] === gameBoard[i + 3]
      && gameBoard[i + 3] === gameBoard[i + 6]
      && gameBoard[i] !== 0
    ) return gameBoard[i];
  }
  return false;
}

function victoryArchivedInDiagonals(gameBoard) {
  if (gameBoard[4] === 0) return false;
  if (gameBoard[0] === gameBoard[4] && gameBoard[4] === gameBoard[8]) {
    return gameBoard[0];
  }
  if (gameBoard[2] === gameBoard[4] && gameBoard[4] === gameBoard[6]) {
    return gameBoard[2];
  }
  return false;
}

function victoryArchieved(gameBoard) {
  return (
    victoryArchivedInLine(gameBoard)
    || victoryArchivedInColumn(gameBoard)
    || victoryArchivedInDiagonals(gameBoard)
  );
}

const TicTacToe = () => {
  const { gameState, updateState} = useContext(AppContext);
  const { gameBoard } = gameState;
  const resetGame = () => {
    updateState({
      activePlayer: 1,
      gameBoard: [0, 0, 0, 0, 0, 0, 0, 0, 0],
    });
  }

  const win = victoryArchieved(gameBoard);
  if (!gameBoard.includes(0) && !win) {
    return (
      <>
        <button
        type="button"
        onClick={resetGame}
        data-testid="restart-button"
      >
        Recomeçar Jogo
      </button>
        <h1>Empate</h1>
      </>
    );
  }

  return (
    <>
      <button
        type="button"
        onClick={resetGame}
        data-testid="restart-button"
      >
        Recomeçar Jogo
      </button>
      {(!win)
        ? (
          <GameBoard />
        )
        : <h1>{`Player ${win === 2 ? 'O' : 'X'} Ganhou`}</h1>
      }
    </>
  );
}

export default TicTacToe;
