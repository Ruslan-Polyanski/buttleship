
const martAroundShip = (squares: (boolean | null | '+')[][], i: number, j: number) => {
  let firstCount = 0;
  let lastCount = 0;
  for(let n = i - 1; firstCount++ < 3; ++n) {
    for(let k = j - 1; lastCount++ < 3; ++k){
      if(n >= 0 && n <= squares.length - 1 && k >= 0 && k <= squares.length - 1) {
        i === n && j === k ? squares[i][j] = false : squares[n][k] = '+';
      }
    }
    lastCount = 0;
  }
}

export { martAroundShip }