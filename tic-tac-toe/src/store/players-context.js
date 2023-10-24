import React from 'react';

const playersContext = React.createContext({
  players: ['Max', 'Rex'],
  setTurn: () => {},
});

export default playersContext;
