
const getStartArea = () => {

  type TRowSquares = (null | boolean)[];
  type TAreaSquares = Array<TRowSquares>;

  function getArea(numCells: number, ships: number[][]): TAreaSquares {
    const result: TAreaSquares = [];

    for(let i = 0; i < numCells; ++i) {
      const row: TRowSquares = new Array(numCells).fill(null);
      result.push(row)
    }

  ships.forEach(item => result[item[0]][item[1]] = true)

    return result;
  }

  const getIndexAround = (i: number, j: number, leng: number): number[][] => {
    const result: number[][] = [];
    let firstCount = 0;
    let lastCount = 0;

    for(let n = i - 1; firstCount++ < 3; ++n) {
      for(let k = j - 1; lastCount++ < 3; ++k){
        if(n >= 0 && n <= leng - 1 && k >= 0 && n <= leng - 1) {
          result.push([n, k])
        }
      }
      lastCount = 0;
    }

    return result;
  }

  const getRandomIndex = (maxNum: number) => {
    let index = -1;

    while(!(index >= 0 && index <= maxNum)) {
      index = (Math.random() * 10)|0;
    }

    return index;
  }


  const getShips = () => {
    const impossibleIndex: number[][] = [];
    const shipIndex: number[][] = [];

    while(shipIndex.length < 3) {
      const ship = [getRandomIndex(4), getRandomIndex(4)]

      if(shipIndex.length === 0) {
        shipIndex.push(ship)
        impossibleIndex.push(...getIndexAround(ship[0], ship[1], 5))
        continue
      }

      if(shipIndex.length === 1 || shipIndex.length === 2) {
        const result: boolean[] = [];

        for(let i = 0; i < impossibleIndex.length; i++) {
          ship.toString() === impossibleIndex[i].toString() && result.push(false)
        }
        
        if(result.length > 0) {
          continue
        } else {
          shipIndex.push(ship)
          impossibleIndex.push(...getIndexAround(ship[0], ship[1], 5))
        }
      }
      
    }

    return shipIndex;

  }


  return getArea(5, getShips());

}

export { getStartArea }