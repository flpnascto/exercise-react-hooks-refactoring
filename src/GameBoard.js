import React, { useContext } from 'react';
import GameCell from './GameCell';
import './GameBoard.css';
import AppContext from './context/AppContext';

const GameBoard = () => {
  // const { gameState } = useContext(AppContext)
  // const { gameBoard } = gameState;
  const { gameBoard } = useContext(AppContext).gameState


  return (
    <div className="game-board">
      {gameBoard.map((playerId, i) => (
        <GameCell
          id={i}
          key={i}
          content={playerId} />
      ))}
    </div>
  );
}

export default GameBoard;