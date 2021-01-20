// src/context/Provider.js

import React, { useState } from 'react';
import CarsContext from './CarsContext';

function Provider({ children }) {
  const carsInitialStateA = {
    red: false,
    blue: false,
    yellow: false,
  }
  const [cars, moveCar] = useState(carsInitialStateA);
  const contextValue = {
    cars,
    moveCar,
  };

  return (
    <CarsContext.Provider value={contextValue}>
      {children}
    </CarsContext.Provider>
  );

}

export default Provider;
