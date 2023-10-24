import { useState } from 'react';
import GameBoard from './GameBoard';
import Player from './Players';
import TurnContextProvider from '../store/TurnContextProvider';
import PlayersContextProvider from '../store/PlayersContextProvider';
import GameOver from './GameOver';

function GameContainer() {
  const [winner, setWinner] = useState('');
  return (
    <main id="game-container">
      <TurnContextProvider>
        <PlayersContextProvider>
          <Player />
          <GameBoard winner={winner} setWinner={setWinner} />
          {winner && <GameOver winner={winner} setWinner={setWinner} />}
        </PlayersContextProvider>
      </TurnContextProvider>
    </main>
  );
}

export default GameContainer;
