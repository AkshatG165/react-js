import { useState } from 'react';
import TurnContext from './turn-context';

function TurnContextProvider(props) {
  const [turn, setTurn] = useState('X');

  return (
    <TurnContext.Provider value={{ turn: turn, setTurn: setTurn }}>
      {props.children}
    </TurnContext.Provider>
  );
}

export default TurnContextProvider;
