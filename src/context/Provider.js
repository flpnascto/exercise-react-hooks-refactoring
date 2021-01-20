// src/context/Provider.js

import React, { useState } from 'react';
import CarsContext from './CarsContext';

function Provider({ children }) {
  const carInitialState = {
    red: false,
    blue: false,
    yellow: false,
  };
  const signalInitialState = 'red';

  const [cars, moveCar] = useState(carInitialState);
  const [signalColor, changeSignal ] = useState(signalInitialState);
  const contextValue = {
    cars,
    moveCar,
    signalColor,
    changeSignal,
  }

  return (
    <CarsContext.Provider value={contextValue}>
      {children}
    </CarsContext.Provider>
  );
}

export default Provider;
