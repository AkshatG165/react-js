import React from 'react';

const TurnContext = React.createContext({
  turn: 'X',
  setTurn: () => {},
});

export default TurnContext;
