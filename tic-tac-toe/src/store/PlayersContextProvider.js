import { useState } from 'react';
import PlayersContext from './players-context';

function PlayersContextProvider(props) {
  const [players, setPlayers] = useState(['Max', 'Rex']);

  return (
    <PlayersContext.Provider
      value={{ players: players, setPlayers: setPlayers }}
    >
      {props.children}
    </PlayersContext.Provider>
  );
}

export default PlayersContextProvider;
