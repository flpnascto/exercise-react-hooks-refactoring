import React, { useState } from 'react';
import AppContext from './AppContext';

function Provider({ children }) {
  const initialState = {
      activePlayer: 1,
      gameBoard: [0, 0, 0, 0, 0, 0, 0, 0, 0],
  }

  const [gameState, updateState] = useState(initialState)

  const contextValue = {
    gameState,
    updateState,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
}

export default Provider;
