import { useState, useContext } from 'react';
import TurnContext from '../store/turn-context';
import PlayersContext from '../store/players-context';
import WinningCombinations from './winning-combinations';

function GameBoard(props) {
  const initialState = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ];
  const turnctx = useContext(TurnContext);
  const [buttons, setButtons] = useState(initialState);

  const onClick = (e) => {
    if (
      ['0', '1', '2'].includes(e.target.id[0]) &&
      ['0', '1', '2'].includes(e.target.id[1]) &&
      buttons[e.target.id[0]][e.target.id[1]] === ''
    ) {
      setButtons((prevButtons) => {
        const tempButtons = prevButtons;
        tempButtons[e.target.id[0]][e.target.id[1]] = turnctx.turn;
        const winner = WinningCombinations(tempButtons);
        props.setWinner(winner);
        if (winner || winner === 'draw') {
          setButtons(initialState);
          turnctx.setTurn('X');
        }
        return tempButtons;
      });
      turnctx.setTurn((prevTurn) => (prevTurn === 'X' ? 'O' : 'X'));
    }
  };

  return (
    <div id="game-board">
      <ol onClick={onClick}>
        <button id="00">{buttons[0][0]}</button>
        <button id="01">{buttons[0][1]}</button>
        <button id="02">{buttons[0][2]}</button>
        <button id="10">{buttons[1][0]}</button>
        <button id="11">{buttons[1][1]}</button>
        <button id="12">{buttons[1][2]}</button>
        <button id="20">{buttons[2][0]}</button>
        <button id="21">{buttons[2][1]}</button>
        <button id="22">{buttons[2][2]}</button>
      </ol>
    </div>
  );
}

export default GameBoard;
