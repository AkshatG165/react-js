function WinningCombinations(buttons) {
  const arr = [];
  buttons.forEach((row) => {
    row.forEach((col) => arr.push(col));
  });

  const lines = [
    // Rows
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // Columns
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // Diagonals
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (arr[a] && arr[a] === arr[b] && arr[a] === arr[c]) {
      return arr[a]; // Return 'X' or 'O' as the winner
    }
  }
  if (
    arr[0] !== '' &&
    arr[1] !== '' &&
    arr[2] !== '' &&
    arr[3] !== '' &&
    arr[4] !== '' &&
    arr[5] !== '' &&
    arr[6] !== '' &&
    arr[7] !== '' &&
    arr[8] !== ''
  )
    return 'draw';
  return ''; // No winner yet
}

export default WinningCombinations;
