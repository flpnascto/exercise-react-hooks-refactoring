import React, { useContext } from 'react';
import './GameCell.css';
import xImage from './x.png';
import oImage from './o.svg';
import AppContext from './context/AppContext';

function toggleActivePlayer(activePlayer) {
  if (activePlayer === 1) return 2;
  return 1;
}

function updateGame(gameState, updateState, cellClicked) {
  const { activePlayer, gameBoard } = gameState;

  const newState = gameBoard;
  let newActivePlayer = activePlayer;

  if (gameBoard[cellClicked] === 0) {
    newState[cellClicked] = activePlayer;
    newActivePlayer = toggleActivePlayer(activePlayer);
  } else newState[cellClicked] = gameBoard[cellClicked];

  updateState({
    activePlayer: newActivePlayer,
    gameBoard: newState,
  })
}
const GameCell = ({ content = 0, id }) => {
  const { gameState, updateState } = useContext(AppContext);
  if (content === 1) {
    return (
      <div
        data-testid={`cell_${id}`}
        className="game-cell"
        onClick={() => updateGame(gameState, updateState, id)}
        role="button"
        tabIndex="0"
        aria-label="Cell"
        onKeyPress={() => updateGame(gameState, updateState, id)}
      >
        <img data-testid={`cell_${id}_image`} alt="X" src={xImage} />
      </div>
    );
  }
  if (content === 2) {
    return (
      <div
        data-testid={`cell_${id}`}
        className="game-cell"
        onClick={() => updateGame(gameState, updateState, id)}
        role="button"
        tabIndex="0"
        aria-label="Cell"
        onKeyPress={() => updateGame(gameState, updateState, id)}
      >
        <img data-testid={`cell_${id}_image`} alt="O" src={oImage} />
      </div>
    );
  }
  return (
    <div
      role="button"
      tabIndex="0"
      aria-label="Cell"
      onKeyPress={() => updateGame(gameState, updateState, id)}
      data-testid={`cell_${id}`}
      className="game-cell"
      onClick={() => updateGame(gameState, updateState, id)}
    />
  );
}

export default GameCell;
