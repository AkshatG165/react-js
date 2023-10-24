import { useContext } from 'react';
import PlayersContext from '../store/players-context';
import TurnContext from '../store/turn-context';

function GameOver(props) {
  const turnctx = useContext(TurnContext);
  const playersctx = useContext(PlayersContext);
  const onClick = () => props.setWinner('');
  var gameOverText = `${
    turnctx.turn === 'X' ? playersctx.players[0] : playersctx.players[1]
  } Won!`;
  if (props.winner === 'draw') gameOverText = 'Match Draw!';

  return (
    <div id="game-over">
      <h2>Game Over</h2>
      <p>{gameOverText}</p>
      <button type="button" onClick={onClick}>
        Rematch!
      </button>
    </div>
  );
}

export default GameOver;
