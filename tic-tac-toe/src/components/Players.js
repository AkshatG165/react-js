import { useState, useContext } from 'react';
import PlayersContext from '../store/players-context';
import TurnContext from '../store/turn-context';

function Player() {
  const turnctx = useContext(TurnContext);
  const playersctx = useContext(PlayersContext);
  const [modeP1, setModeP1] = useState('edit');
  const [modeP2, setModeP2] = useState('edit');

  const onEditP1 = () => setModeP1('save');
  const onEditP2 = () => setModeP2('save');
  const onSaveP1 = () => setModeP1('edit');
  const onSaveP2 = () => setModeP2('edit');

  const onChangeP1 = (e) =>
    playersctx.setPlayers((prev) => [e.target.value.toUpperCase(), prev[1]]);
  const onChangeP2 = (e) =>
    playersctx.setPlayers((prev) => [prev[0], e.target.value.toUpperCase()]);

  const p1Classes = `player ${turnctx.turn === 'X' ? 'active' : ''}`;
  const p2Classes = `player ${turnctx.turn === 'O' ? 'active' : ''}`;

  return (
    <ol id="players">
      <li>
        <div className={p1Classes}>
          {modeP1 === 'edit' && (
            <span className="player-name">{playersctx.players[0]}</span>
          )}
          {modeP1 === 'save' && <input type="text" onChange={onChangeP1} />}
          <span className="player-symbol">X </span>
          {modeP1 === 'edit' && <button onClick={onEditP1}>Edit</button>}
          {modeP1 === 'save' && <button onClick={onSaveP1}>Save</button>}
        </div>
      </li>
      <li>
        <div className={p2Classes}>
          {modeP2 === 'edit' && (
            <span className="player-name">{playersctx.players[1]}</span>
          )}
          {modeP2 === 'save' && <input type="text" onChange={onChangeP2} />}
          <span className="player-symbol">O </span>
          {modeP2 === 'edit' && <button onClick={onEditP2}>Edit</button>}
          {modeP2 === 'save' && <button onClick={onSaveP2}>Save</button>}
        </div>
      </li>
    </ol>
  );
}

export default Player;
